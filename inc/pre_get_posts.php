<?php

function salvia_pre_get_posts( $query ) {
	
	// do not modify queries in the admin
	if( is_admin() ) {
		
		return $query;
		
	}
	

	// only modify queries for 'event' post type
	if( isset($query->query_vars['post_type']) && $query->query_vars['post_type'] == 'people' ) {
		
		$query->set('orderby', 'meta_value');	
		$query->set('meta_key', 'sort');	 
		$query->set('order', 'ASC'); 
		
	}
	

	// return
	return $query;

}

add_action('pre_get_posts', 'salvia_pre_get_posts');

?>