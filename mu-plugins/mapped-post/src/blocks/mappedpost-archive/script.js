import "./style.scss";
const { render, useEffect, useState, Component  } = wp.element;
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet";
import { Icon } from "leaflet";
import store from 'store';

console.log(mapped_post);
//import useFetch from "./useFetch"

const archives = document.querySelectorAll(".wp-block-mapped-posts-archive");

const appUrl = mapped_post.rest_api;
const getPosts = `${appUrl}wp/v2/protected_farms`;

export const icon = new Icon({
    iconUrl: "/images/mappin.svg",
    iconSize: [25, 25]
  });


const MyPopupMarker = ({ content, position }) => (
  <Marker position={position}>
    <Popup>{content}</Popup>
  </Marker>
)

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ))
  return <>{items}</>
}



class MappedPostsMap extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
      let postUrl = `${appUrl}wp/v2/protected_farms`;
      const farmData = store.get('farmStore');
      if (farmData) {
        this.setState({
          posts: farmData
        })
      } else {
      fetch(postUrl)
      .then(data => data.json())
      .then(data => {
        this.setState({
          posts: data
        })
        store.set('farmStore', data);
      })
    }
    }

    renderPopup(post) {
      return (
        <div>
          <a href={post.link}>{post.title.rendered}</a>
          <p>{post.meta.mappedposts_acreage} in {post.meta.mappedposts_location}</p>
        </div>
      )
    }



    render() {
        const markers = this.state.posts.map((post, index) => {
            return(
                {   key: 'marker-' + post.id,
                    position: [post.acf.lookup_location.lat, post.acf.lookup_location.lng],
                    title: post.title.rendered,
                    popup: this.renderPopup(post)
                }
            )
        })

        let items = this.state.posts.map((post, index) => {
            return(
              <div key={post.id}>
                <a href={post.link}>{post.title.rendered}</a>
                <p>{post.meta.mappedposts_acreage} acres in {post.meta.mappedposts_location}</p>
              </div>
            )
        });

        console.log(items);
        return (
            <div>{items}</div>
        );
    }
}

// archives.forEach(archive => {
//     //const posts = useFetch('https://wa-farmland-trust.local/wp-json/wp/v2/protected_farms');
//     render(
//         <MappedPostsMap/>
//     , archive)
// });

