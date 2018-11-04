<?php
/**
 * Plugin Name: AxisTaylor Guten Block Library
 * Plugin URI: https://github.com/kidunot89/axistaylor-guten/
 * Description: A library of Guten Blocks.
 * Author: Geoff Taylor
 * Author URI: https://axistaylor.com/
 * Version: 0.0.1
 * License: MIT
 *
 * @package axistaylor-guten
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
