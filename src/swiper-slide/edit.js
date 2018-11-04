import classNames from 'classnames';

const { __ } = wp.i18n;
const { compose } = wp.compose;
const {
	InspectorControls,
	InnerBlocks,
	PanelColorSettings,
	withColors,
} = wp.editor;

export default compose( [
	withColors( 'backgroundColor', 'color' ),
] )(
	( props ) => {
		const {
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
				className={ classNames(
					className,
					customClassName,
				) }
				style={ style }
			>
				<InspectorControls>
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
					/>
				</InspectorControls>
				<InnerBlocks templateLock={ false } />
			</div>
		);
	}
);
