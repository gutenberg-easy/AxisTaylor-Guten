/**
 * BLOCK: Group
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
// External dependencies
import classNames from 'classnames';

// Import CSS.
import './style.scss';
import './editor.scss';

// Internal dependencies
import edit, { dimRatioToClass } from './edit';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { Path, SVG } = wp.components;
const { InnerBlocks, getColorClassName } = wp.editor;

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
registerBlockType( 'axistaylor-guten/group', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Group' ), // Block title.
	icon: <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><Path d="M500 128c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V128h12zm-52-64h32v32h-32V64zM32 64h32v32H32V64zm32 384H32v-32h32v32zm416 0h-32v-32h32v32zm-40-64h-12c-6.627 0-12 5.373-12 12v12H96v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h12v256zm-36-192h-84v-52c0-6.628-5.373-12-12-12H108c-6.627 0-12 5.372-12 12v168c0 6.628 5.373 12 12 12h84v52c0 6.628 5.373 12 12 12h200c6.627 0 12-5.372 12-12V204c0-6.628-5.373-12-12-12zm-268-24h144v112H136V168zm240 176H232v-24h76c6.627 0 12-5.372 12-12v-76h56v112z" /></SVG>, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Group' ),
	],
	supports: {
		align: [ 'full', 'wide' ],
	},
	attributes: {
		align: {
			type: 'string',
			default: 'wide',
		},
		id: {
			type: 'string',
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
		dimRatio: {
			type: 'number',
			default: 50,
		},
	},
	getEditWrapperProps( attributes ) {
		const { align } = attributes;
		if ( -1 !== [ 'full', 'wide' ].indexOf( align ) ) {
			return { 'data-align': align };
		}
	},
	edit,
	save( { attributes, className, customClassName } ) {
		const {
			id,
			align,
			dimRatio,
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
			dimRatioToClass( dimRatio ),
			backgroundColorClass,
			{ 'has-background-dim': dimRatio !== 0 },
			foregroundColorClass,
			align ? `align${ align }` : null,
			customClassName,
		);

		return (
			<div id={ id } className={ classes } style={ style }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
