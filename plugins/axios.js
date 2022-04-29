export default function ({ $axios, store }, inject) {
    $axios.onRequest(config => {
        if (process.browser) {
            config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
        }
    })

    $axios.onError(error => {
        if (error.response && error.response.status === 401 && route.path !== '/') redirect('/');
    })
}