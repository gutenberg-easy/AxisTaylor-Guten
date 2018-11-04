import classNames from 'classnames';

const { __ } = wp.i18n;
const { TextControl, RangeControl } = wp.components;
const { compose } = wp.compose;
const {
	InspectorControls,
	InnerBlocks,
	PanelColorSettings,
	withColors,
} = wp.editor;

export const dimRatioToClass = ( ratio ) => {
	return ( ratio === 0 || ratio === 50 ) ?
		null :
		'has-background-dim-' + ( 10 * Math.round( ratio / 10 ) );
};

export default compose( [
	withColors( 'backgroundColor', 'color' ),
] )(
	( props ) => {
		const {
			attributes: { id, dimRatio },
			setAttributes,
			className,
			customClassName,
			backgroundColor,
			color,
			setBackgroundColor,
			setColor,
		} = props;
		const style = {
			backgroundColor: backgroundColor.color,
			color: color.color,
		};
		return (
			<div
				id={ id }
				className={ classNames(
					className,
					dimRatioToClass( dimRatio ),
					{ 'has-background-dim': dimRatio !== 0 },
					customClassName,
				) }
				style={ style }
			>
				<InspectorControls>
					<TextControl
						label={ __( 'ID' ) }
						value={ id }
						onChange={ value => setAttributes( { id: value } ) }
						help={ __( 'Group\'s HTML \'id\' attribute ' ) }
					/>
					<PanelColorSettings
						title={ __( 'Background' ) }
						initialOpen={ true }
						colorSettings={ [
							{
								value: backgroundColor.color,
								onChange: setBackgroundColor,
								label: __( 'Background Color' ),
							},
							{
								value: color.color,
								onChange: setColor,
								label: __( 'Color' ),
							},
						] }
					>
						<RangeControl
							label={ __( 'Background Opacity' ) }
							value={ dimRatio }
							onChange={ value => setAttributes( { dimRatio: value } ) }
							min={ 0 }
							max={ 100 }
							step={ 10 }
						/>
					</PanelColorSettings>
				</InspectorControls>
				<InnerBlocks templateLock={ false } />
			</div>
		);
	}
);
