<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   0.0.1
 * @package axistaylor-guten
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 0.0.1
 */
function axistaylor_guten_block_assets() {
	// Styles.
	wp_enqueue_style(
		'axistaylor-guten-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: filemtime — Gets file modification time.
	);

	// Swiper Styles.
	wp_enqueue_style(
		'axistaylor-guten-swiper-css',
		plugins_url( 'lib/swiper/swiper.css', dirname( __FILE__ ) ),
		array( 'wp-blocks' )
		// filemtime( plugin_dir_path( __DIR__ ) . 'lib/swiper/min/swiper.min.css' ) // Version: filemtime — Gets file modification time.
	);

	// Swiper Scripts.
	wp_enqueue_script(
		'axistaylor-guten-swiper-js',
		plugins_url( 'lib/swiper/swiper.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		// filemtime( plugin_dir_path( __DIR__ ) . 'lib/swiper/min/swiper.min.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	wp_enqueue_script(
		'axistaylor-guten-shared-js',
		plugins_url( 'lib/shared.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'lodash', 'axistaylor-guten-swiper-js' ),
		// filemtime( plugin_dir_path( __DIR__ ) . 'lib/shared.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	wp_enqueue_script(
		'axistaylor-guten-swiper-public-js',
		plugins_url( 'lib/public.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'axistaylor-guten-shared-js' ),
		// filemtime( plugin_dir_path( __DIR__ ) . 'lib/public.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

} // End function axistaylor_guten_block_assets().

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'axistaylor_guten_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 0.0.1
 */
function axistaylor_guten_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'axistaylor-guten-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ), // Dependencies, defined above.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Styles.
	wp_enqueue_style(
		'axistaylor-guten-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: filemtime — Gets file modification time.
	);
} // End function axistaylor_guten_cgb_editor_assets().

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'axistaylor_guten_editor_assets' );
