/**
 * BLOCK: Swiper-Slide Block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

/**
 * External dependencies
 */
import classNames from 'classnames';

/**
 * Import CSS.
 */
import './style.scss';
import './editor.scss';

/**
 * Internal dependencies
 */
import edit from './edit';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InnerBlocks, getColorClassName } = wp.editor;
const { registerBlockType } = wp.blocks;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'axistaylor-guten/swiper-slide', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Slide' ), // Block title.
	parent: [ 'axistaylor-guten/swiper' ],
	icon: 'images-alt2', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	description: __( 'A single slide within a slider block' ),
	keywords: [
		__( 'Swiper' ),
		__( 'Slide' ),
	],
	attributes: {
		id: {
			type: 'string',
			default: '',
		},
		backgroundColor: {
			type: 'string',
		},
		color: {
			type: 'string',
		},
		customBackgroundColor: {
			type: 'string',
		},
		customColor: {
			type: 'string',
		},
	},
	supports: {
		inserter: false,
		align: false,
	},
	edit,
	save( { attributes, className, customClassName } ) {
		const {
			customBackgroundColor,
			customColor,
			backgroundColor,
			color,
		} = attributes;
		const backgroundColorClass = getColorClassName( 'background-color', backgroundColor );
		const foregroundColorClass = getColorClassName( 'color', color );

		const style = {};
		if ( ! backgroundColorClass ) {
			style.backgroundColor = customBackgroundColor;
		}
		if ( ! backgroundColorClass ) {
			style.color = customColor;
		}

		const classes = classNames(
			className,
			'swiper-slide',
			backgroundColorClass,
			foregroundColorClass,
			customClassName,
		);

		return (
			<div className={ classes } style={ style }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
