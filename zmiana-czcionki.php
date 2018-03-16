<?php
/* 
Plugin Name: Zwiększanie czcionki
Plugin URI: http://emedway.pl
Description: Powiększanie czcionki i zapisywanie cookie
Author: Medway Sp. z o.o.
Version: 1.0.0
Author URI: http://emedway.pl
*/ 

function form_creation(){
?>



<ul class="wcagIconsWrapper">
	<li class="wcagIcon wcagIconFont" id="wcagFont0">
		<button type="button" title="Normalny rozmiar czcionki">A</button>
	</li>
	<li class="wcagIcon wcagIconFont2" id="wcagFont1">
		<button type="button" title="Średni rozmiar czcionki">A+</button>
	</li>
	<li class="wcagIcon wcagIconFont3" id="wcagFont2">
		<button type="button" title="Duży rozmiar czcionki">A++</button>
	</li>
	<li class="wcagIcon wcagIconFont4" id="wcagFont3">
		<button type="button" title="Bardzo duży rozmiar czcionki">A+++</button>
	</li>
</ul>


<?php
}

function Zumper_widget_enqueue_script() {   
    wp_enqueue_script( 'my_custom_script', plugin_dir_url( __FILE__ ) . 'js/changeFont.js' );
}
add_action('wp_enqueue_scripts', 'Zumper_widget_enqueue_script');

add_shortcode('font_wcag', 'form_creation');
?>



