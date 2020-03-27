
<?php
if (!isset($_GET['text']) || !preg_match("/^[\x{4e00}-\x{9fa5}a-zA-Z0-9]+$/u",$_GET['text'])) die;
$i = $_GET['text'];//自定义文本内容
 
$font = __DIR__ . "/wp-content/themes/Sakura/cdn/font/coat-hanger.ttf";//字体路径最好本地
$fontSize = 54;//字体大小
$originalImage = __DIR__ . "/wp-content/themes/Sakura/images/custom/blue.png";//背景图片路径
$y = 428;//y轴 可以根据图片大小自定义坐标
$im = imagecreatefrompng($originalImage);//载入图像
imagesavealpha($im,true);//设置透明
 
$black = imagecolorallocate($im,95,93,188);//填充颜色
$width = imagesx($im);//获取宽度
$textWidth = imagettfbbox($fontSize,0,$font,$i);//写入坐标文字
 
$x = ($width - 93.63 - 87.85 - ($textWidth[4] - $textWidth[6])) / 2 + 90;
//x轴 计算坐标
header("Content-type: image/png");//让游览器以我我们是个图片
imagettftext($im,$fontSize,0,$x,$y,$black,$font,$i);//绘制文字
imagepng($im, NULL,0);//输出地址 null为游览器
imagedestroy($im);//释放ing
