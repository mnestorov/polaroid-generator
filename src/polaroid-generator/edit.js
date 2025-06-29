import React from 'react';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { RangeControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * Renders the photos.
 *
 * @param {number} count - The number of photos to render.
 * @returns {Array} - An array of photo elements.
 */
const renderPhotos = ( count ) => {
	const photosArray = [];
	for ( let i = 0; i < count; i++ ) {
		photosArray.push(
			<div className="polaroid" key={ i }>
				<img 
					src={`https://picsum.photos/200/150?random=${ i }&blur=1`} 
					width="200"
					height="150"
					loading="lazy"
					alt={`Photo ${ i + 1 }`}

					// Handle load
					onLoad={(e) => {
						e.target.classList.add('loaded');
						e.target.nextSibling.classList.add('loaded');
					}}
					
					// Handle error
					onError={(e) => {
						e.target.style.display = 'none';
						e.target.nextSibling.style.display = 'block';
					}}
				/>
				<div className="caption">
					Photo { i + 1 }
				</div>
			</div>
		);
	}
	return photosArray;
};

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { photos } = attributes;
	return (
		<section { ...useBlockProps() }>
			<div className="polaroids">
				{ renderPhotos( photos ) }
			</div>
			<InspectorControls>
				<PanelBody title="Polaroid Generator Settings">
					<RangeControl
						label={ __( 'Photos', 'polaroid-generator' ) }
						value={ photos }
						onChange={ ( newCount ) => 
							setAttributes( { photos: newCount } ) 
						}
						min={ 3 }
						max={ 12 }
						__nextHasNoMarginBottom
					/>
				</PanelBody>
			</InspectorControls>
		</section>
	);
}
