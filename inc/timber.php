<?php

$timber = new Timber\Timber();

/**
 * Check if Timber is activated
 */

if (! class_exists('Timber')) {
    add_action('admin_notices', function () {
        echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url(admin_url('plugins.php#timber')) . '">' . esc_url(admin_url('plugins.php')) . '</a></p></div>';
    });
    return;
}

/**
 * Timber
 */

class SalviaTheme extends TimberSite
{
    public function __construct()
    {
        add_filter('timber_context', array( $this, 'add_to_context' ));
        parent::__construct();
    }
    public function add_to_context($context)
    {

        /* Add extra data */
        if (defined('WP_DEBUG') && true === WP_DEBUG) {
            $context['debug'] = true;
        }
        

        /* Menu */
        $context['menu'] = new TimberMenu('primary_navigation');

        /* Site info */
        $context['site'] = $this;

        $context['sidebar_primary'] = Timber::get_widgets('sidebar-primary');

        return $context;
    }
}
new SalviaTheme();

/**
 * Asset function.
 *
 * @param Twig_Environment $twig
 * @return $twig
 */
add_filter('timber/twig', function (\Twig_Environment $twig) {
    $twig->addFunction(new \Timber\Twig_Function('asset', 'salvia_asset'));
    return $twig;
});


/**
 * Title function.
 *
 * @param Twig_Environment $twig
 * @return $twig
 */
add_filter('timber/twig', function (\Twig_Environment $twig) {
    $twig->addFunction(new \Timber\Twig_Function('title', 'salvia_title'));
    return $twig;
});