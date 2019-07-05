import Backendless from 'backendless';

export function signupuser(params, done){
        Backendless.Data.of( "LDNUsers" ).save( params )
		    .then(response => {
         // console.log('signup response 12 ' + JSON.stringify(response));
		    	done(response);
		    }).catch(err => {
		    	console.error(err);
		    });
}

export function loginuser(queryBuilder, done){
       Backendless.Data.of( "LDNUsers" ).find( queryBuilder )
		    .then(response => {
         // console.log('signup response 12 ' + JSON.stringify(response));
		    	done(response);
		    }).catch(err => {
		    	console.error(err);
		    });
}
/*
export function fetchBlogPosts() {
    return fetch('http://api.symfony-3.dev/app_dev.php/posts', {
        method: 'GET',
        mode: 'CORS'
    }).then(res => res.json())
    .catch(err => err);
}

export function fetchBlogPost(id) {
    return fetch('http://api.symfony-3.dev/app_dev.php/posts/' + id, {
        method: 'GET',
        mode: 'CORS'
    }).then(res => res.json())
    .catch(err => err);
}

export function createBlogPost(data) {
    return fetch('http://api.symfony-3.dev/app_dev.php/posts', {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}

export function updateBlogPost(id, data) {
    return fetch('http://api.symfony-3.dev/app_dev.php/posts/' + id, {
        method: 'PUT',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}

export function deleteBlogPost(id) {
    return fetch('http://api.symfony-3.dev/app_dev.php/posts/' + id, {
        method: 'DELETE',
        mode: 'CORS'
    }).then(res => {
        return res;
    }).catch(err => err);
}
*/