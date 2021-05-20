import { useEffect, useState } from 'react';
//import { render } from 'react-dom';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
const { render } = wp.element;
import { getMarkerData, getCategoryData } from './components/getData';
import Map from './components/Map';
import withMapLoading from './components/withMapLoading';

import './style.scss';
import _ from 'lodash';
//with help from https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/

//http://genuine-skagit-valley.local/wp-json/wp/v2/ck_members?per_page=100&_fields=id,title,excerpt,ck_business_type,acf.member_address
function App(){
    //const MapLoading = withMapLoading(Map);
    const [markersState, setMarkersState] = useState({
      loadingMarkers: true,
      markers: null,
      visible: null,
      bounds: []
    });
    const [catState, setCatState] = useState({
      loadingCategories: true,
      categories: null,
    });

    // setCatState((prevState) => {
    //   let newCategories = prevState.categories.slice();
    //   newCategories.push('new category');
    //   return {
    //     ...prevState,
    //     categories: newCategories
    //   }
    // });

    const resolveMarkers = (markers) =>  {
        updateVisibleMarkers(markers);
        setMarkersState( (prevState) => {
          return {
            ...prevState,
            loadingMarkers: false,
            markers: markers,
            visible: markers,
            bounds: setBounds(markers)
          }
        });

    }

    const updateVisibleMarkers = (markers) => {
      console.log(markers);
      setMarkersState( (prevState) => {
        return {
          ...prevState,
          visible: markers,
          bounds: setBounds(markers)
        }
      });

    }

    const setBounds = (markers) => {
      console.log("setbounds");
        const bounds = L.latLngBounds();
        markers.forEach( (data) => {
            let position = [data.acf.member_address.lat, data.acf.member_address.lng];
            bounds.extend(position);
        })
        console.log(bounds);
        return bounds;
    }

    const sortCategoriesHierarchically = ((cats, into, parent=0 ) => {
      //copy the array into a new array that we pass back into the function
      let catsCopy = _.clone(cats);
      _.forEach( cats, function(item) {
          if (item.parent == parent){

              into.push(item);
              _.remove(catsCopy, cat => cat.id === item.id);
          }
      });

      into.forEach( (topCat) => {
          topCat.children = [];
          sortCategoriesHierarchically(catsCopy, topCat.children, topCat.id)
      })
  })



  const resolveCategories = (categories) => {
    const hierarchy = [];
    sortCategoriesHierarchically(categories, hierarchy, 0);
    setCatState( (prevState) => {
      return {
        ...prevState,
        loadingCategories: false,
        categories: hierarchy,
      }
    });
  }

  useEffect(() => {
    getMarkerData(resolveMarkers);
  }, [setMarkersState]);

  useEffect(() => {
    getCategoryData(resolveCategories);
  }, [setCatState]);
  return(
    <Map
    isMapLoading={markersState.loadingMarkers}
    isCatLoading={catState.loadingCategories}
    categories={catState.categories}
    locations={markersState.markers}
    visibleLocations={markersState.visible}
    visibleBounds={markersState.bounds}
    onUpdateLocations={updateVisibleMarkers}
    zoom="8"
    maxZoom="18"
    />
    //return (<Map zoom={10} bounds={bounds} maxZoom={18} locations={markerData} />);
  )
}


if (document.getElementById('mapped-posts-map')){
    render(<App/>, document.getElementById('mapped-posts-map'));
}
