import Backendless from 'backendless';

export function fetchRoles(params, done){
        Backendless.Data.of( "LDNRoles" ).save( params )
		    .then(response => {
         // console.log('signup response 12 ' + JSON.stringify(response));
		    	done(response);
		    }).catch(err => {
		    	console.error(err);
		    });
}

export function fetchRole(queryBuilder, done){
       Backendless.Data.of( "LDNRoles" ).find( queryBuilder )
		    .then(response => {
         // console.log('signup response 12 ' + JSON.stringify(response));
		    	done(response);
		    }).catch(err => {
		    	console.error(err);
		    });
}

export function saveRole () {

  Backendless.Data.of( "LDNRoles" ).save ()
  .then (response => { done(response);})
  .catch (err => {console.error(err);});
}