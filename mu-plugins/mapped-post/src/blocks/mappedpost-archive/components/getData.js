import axios from 'axios'

const baseUrl = 'http://genuine-skagit-valley.local/wp-json/wp/v2/';

const getData = (page, url, data, resolve, reject) => {
    const query = `${url}&page=${page}`
    axios.get(query)
    .then(response => {
        const retrievedData = data.concat(response.data);
        if (response.headers['x-wp-totalpages'] > page) {
            getData(page+1, url, retrievedData, resolve, reject)
        } else {
            resolve(retrievedData)
        }
    }).catch(error => {
        console.log(error)
    })
}

export const getMarkerData = (resolve, reject) => {
    const url = `${baseUrl}ck_members?per_page=100&_fields=id,link,title,excerpt,ck_business_type,acf.member_address`
    return getData(1, url, [], resolve, reject);
}

export const getCategoryData = (resolve, reject) => {
    //http://genuine-skagit-valley.local/wp-json/wp/v2/ck_business_type?per_page=100&_fields=id,count,name,slug,parent
    const url = `${baseUrl}ck_business_type?per_page=100&_fields=id,count,name,slug,parent`;

    return getData(1, url, [], resolve, reject);
}



export default getMarkerData;