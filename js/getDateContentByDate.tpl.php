<?

$dates = new WP_Query(array(
	'post_type' => 'cal',
	'posts_per_page' => -1,
));

?>
<script>

var __cal_dates = {
	
	<?
	while ($dates->have_posts()) {
		$dates->the_post();
		$id = get_the_ID();
		$date = get_field('cal_date', $id);
		
		if($date == date('md')) {
			$this->__ast_day = $id;
		}
		
	?>
	'<?=$date;?>' : <?=$id;?>,
	<?
	}
	wp_reset_postdata();
	?>
	
};

window.getDateContentByDate = function(str) {
	
	var res;
	
	if(__cal_dates[str]) {
		
		res = parseInt(__cal_dates[str]);
		
	} else {
		
		res = 0;
		
	}
	
	return res;
	
};
</script>