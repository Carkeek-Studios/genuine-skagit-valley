<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package waflt_theme
 */

namespace WP_Rig\WP_Rig;

?>
<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php
	if ( ! waflt_theme()->is_amp() ) {
		?>
		<script>document.documentElement.classList.remove( 'no-js' );</script>
		<?php
	}
	?>

	<?php wp_head(); ?>

	  <!-- Facebook Pixel Code -->
	  <?php
		$event_track  = '';
			$pagename = get_page_uri();
		if ( $pagename === 'thanks-for-signing-up-for-the-crop' || $pagename === 'thanks-for-registering-for-our-event' ) {
			$event_track = "fbq('track', 'CompleteRegistration');";
		} elseif ( $pagename === 'thank-you-for-your-donation' ) {
			$amount = '';
			if ( isset( $_GET['amt'] ) ) {
				$value  = str_replace( '$', '', $_GET['amt'] );
				$amount = ", {currency: 'USD', value: '" . $value . "'}";
			}
			$event_track = "fbq('track', 'Purchase' " . $amount . ');';
		}
		?>
  <script>
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1575132386142495');
  fbq('track', 'PageView');
  <?php echo $event_track; ?>
  </script>
  <noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=1575132386142495&ev=PageView&noscript=1"
  /></noscript>
  <!-- DO NOT MODIFY -->
  <!-- End Facebook Pixel Code -->


  <!-- Mail Chimp Goal Tracking, added 042215 -->
  <script type="text/javascript">
	var $mcGoal = {'settings':{'uuid':'35b77af6b8bcb01d27697652b','dc':'us3'}};
	(function() {
	  var sp = document.createElement('script'); sp.type = 'text/javascript'; sp.async = true; sp.defer = true;
	  sp.src = ('https:' == document.location.protocol ? 'https://s3.amazonaws.com/downloads.mailchimp.com' : 'https://downloads.mailchimp.com') + '/js/goal.min.js';
	  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sp, s);
	})();
  </script>

  <!-- Mailchimp / Google Ad Tracker added 101117 -->
  <script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/35b77af6b8bcb01d27697652b/53f209bf9718969ea0db3f826.js");</script>


  <!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-TBPT23D');</script>
	<!-- End Google Tag Manager -->

</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'waflt-theme' ); ?></a>

	<header id="masthead" class="site-header">
		<div class="site-header--inner">

			<?php get_template_part( 'template-parts/header/custom_header' ); ?>

			<?php get_template_part( 'template-parts/header/branding' ); ?>

			<div class="header-nav-wrapper">

				<?php get_template_part( 'template-parts/header/navigation' ); ?>

				<?php get_template_part( 'template-parts/header/search' ); ?>

				<?php get_template_part( 'template-parts/header/top_navigation' ); ?>

			</div>
		</div>

	</header><!-- #masthead -->
	<div class="overlay"></div>
