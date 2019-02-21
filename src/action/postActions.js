
export const fetchPosts = () => dispatch => {
    // fetch('')
    //     .then(res => res.json())
    //     .then(posts =>
    //         dispatch({
    //             type:FETCH_POSTS,
    //             payload:posts
    //         })
    //     )
    console.log('test1')
    dispatch({
        type:'FETCH_POSTS',
        payload:'Daisy'
    })
}
export const fetchName = () => dispatch =>{
    dispatch({
        type:'FETCH_NAME',
        payload:'qiangweixinqing'
    })
}
// export const createPost = postData => dispatch =>{

// }