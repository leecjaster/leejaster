<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'leecjaster1');

/** MySQL database password */
define('DB_PASSWORD', 'Akyint33#');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'y)CO=&_0b|)+x857 t`7?tHKItw$9^q^r6fel-RU#*i0(z<A!d1 yvHy1*9G+AA|');
define('SECURE_AUTH_KEY',  '>tc:L3_Ru7aq%dT^+vc|FP1#A^nl0uQA3sgI{f[a*L8u/Nq~)NKrd-U+PcIQG}7k');
define('LOGGED_IN_KEY',    '(7q*<zD=`D3.9j1Y*Q|3t=CjI+s|P(iZ *-6Gb-l|?,-ad(#`xiY=8=H@i/|cWWy');
define('NONCE_KEY',        'Q|{PL>!=Fb^^Yz4IG$<^rY1<R+;m1Is=/7~{jRJ 2:B_a%1@X#]% P*q+H-Xw#:-');
define('AUTH_SALT',        '|1 .nfexx-+|3TciC;&+xsZ5*st^M^DEE`N1PT|~Y`]v&vn5:=E;aDi,-^X;,)Gw');
define('SECURE_AUTH_SALT', 'f!k=|LnrgW47f;#rN&GF)Sh_9vGKieL7CbH?:LiP|Gd8m&G}}*u^ZXy:-L}8jlgz');
define('LOGGED_IN_SALT',   '1$f{L2d/BdW]D[HErI-e<o?OW|:u:+^usr0UH-mQU*Rz({[ye_+31L{m{MEV5m`h');
define('NONCE_SALT',       'k#h|,W2>7$0V>J[Vkz+-bBEAWB*^mV|q-+6v|e`(~YW;}Ol~@],r7@Im(&SKFgWK');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);
//define( 'WP_DEBUG_DISPLAY', false );
//define( 'WP_DEBUG_LOG', true );

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');