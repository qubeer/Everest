<?php

$transName = 'list_tweets';
$cacheTime = 10;

if(false === ($twitterData = get_transient($transName) ) ){
     // require the twitter auth class
     require_once 'twitteroauth/twitteroauth.php';
     $twitterConnection = new TwitterOAuth(
					'u5wudMxTRM3fwi23OUg',	// Consumer Key
					'z9UqLTtUlscYFouIDvI44DH97jqoXhTHQyreONmMLgs',   	// Consumer secret
					'128981403-WcVPBhWp7dmLpT1kGanGiOnSSCD8j9I9VzUfjRo9',       // Access token
					'7zlWruZFGNtZySNRlUwGEBSKRNABrWigoFpCbXefuk'    	// Access token secret
					);

     $twitterData = $twitterConnection->get(
					  'statuses/user_timeline',
					  array(
					    'screen_name'     => $this->yurenlimbu,
					    'count'           => $this->twitter_postcount,
					    'exclude_replies' => false
					  )
					);

     if($twitterConnection->http_code != 200)
     {
          $twitterData = get_transient($transName);
     }

     // Save our new transient.
     set_transient($transName, $twitterData, 60 * $cacheTime);
}
?>