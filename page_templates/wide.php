<?php
/**
 * Template Name: Wide
 * Description: A wider page
 */

$context = Timber::context();

$timber_post     = new Timber\Post();
$context['post'] = $timber_post;
Timber::render( array( 'page-wide.twig', 'page.twig' ), $context );