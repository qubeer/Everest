//Set parameter for query string
$username = 'paulund_';
$num = '10';

// Get the data from Twitter JSON API
$json = wp_remote_get("http://api.twitter.com/1/statuses/user_timeline.json?screen_name=$username&count=$num");
	 
// Decode JSON into array
$data = json_decode($json['body'], true);

//Create unordered list
echo '<ul class="twitter">';

//Loop through all twitter tweets and display the text with the time it was created
foreach($data as $tweets){

	$text = $tweets['text'];
	$date = $tweets['created_at'];

	//Make time human readable ie. 6 hours ago
	$h_time = sprintf( __('%s ago'), human_time_diff( $time ) );

	echo '<li>'.$text . ' '. $h_time . '</li>'; 
}

//Close list
echo '</ul>';