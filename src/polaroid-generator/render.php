<?php
/**
 * Render the block.
 *
 * @param array $attributes The block attributes.
 * @return string The block HTML.
 * 
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 * @package polaroid-generator
 */

$photos = $attributes['photos'];
?>

<section <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<div class="polaroids">
		<?php for ( $i = 1; $i <= $photos; $i++ ) : ?>
			<div class="polaroid">
				<img 
					src="<?php echo esc_url( add_query_arg( 'random', $i, 'https://picsum.photos/200/150' ) ); ?>"
					alt="<?php echo esc_attr( sprintf( 'Photo %d', $i ) ); ?>"
					width="200"
					height="150"
					loading="lazy"
					data-photo-id="<?php echo $i; ?>"
				/>
				<div class="caption" data-photo-id="<?php echo $i; ?>">
					<?php echo esc_html( sprintf( 'Photo %d', $i ) ); ?>
				</div>
			</div>
		<?php endfor; ?>
	</div>
</section>
