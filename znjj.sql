/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50629
Source Host           : localhost:3306
Source Database       : znjj

Target Server Type    : MYSQL
Target Server Version : 50629
File Encoding         : 65001

Date: 2016-09-23 08:52:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `air_condition`
-- ----------------------------
DROP TABLE IF EXISTS `air_condition`;
CREATE TABLE `air_condition` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `equipment_id` int(11) NOT NULL DEFAULT '0' COMMENT '设备id',
  `model` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '空调模式  0制冷 1制热 2自动 3通风 4除湿',
  `direction` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '风向 0中 1上 2下 3扫风',
  `speed` int(11) NOT NULL DEFAULT '0' COMMENT '风速 0自动 1低 2中 3高',
  `temperature` int(10) unsigned NOT NULL DEFAULT '26' COMMENT '温度',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of air_condition
-- ----------------------------
INSERT INTO `air_condition` VALUES ('1', '20', '0', '1', '0', '26', '2016-09-18 11:00:42', '2016-09-23 08:46:56');
INSERT INTO `air_condition` VALUES ('2', '28', '1', '0', '2', '26', '2016-09-14 12:01:24', '2016-09-14 12:01:24');
INSERT INTO `air_condition` VALUES ('3', '29', '1', '0', '0', '26', '2016-09-13 17:03:23', '2016-09-13 17:03:23');
INSERT INTO `air_condition` VALUES ('4', '32', '4', '3', '0', '26', '2016-09-18 11:33:19', '2016-09-23 08:40:18');

-- ----------------------------
-- Table structure for `equipment`
-- ----------------------------
DROP TABLE IF EXISTS `equipment`;
CREATE TABLE `equipment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL DEFAULT '',
  `host_id` int(11) NOT NULL DEFAULT '0' COMMENT '所属主机id',
  `type_id` int(11) NOT NULL DEFAULT '0' COMMENT '设备类型',
  `status` varchar(45) NOT NULL DEFAULT '0' COMMENT '设备状态',
  `is_deleted` int(11) NOT NULL DEFAULT '0' COMMENT '0未从主机移除   1已从主机移除',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `index_equip` (`name`),
  KEY `index_equip_status` (`status`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8 COMMENT='设备';

-- ----------------------------
-- Records of equipment
-- ----------------------------
INSERT INTO `equipment` VALUES ('1', '电视', '1', '3', '0', '0', '2016-08-22 08:25:27', '2016-08-23 03:01:55');
INSERT INTO `equipment` VALUES ('2', '卫生间灯', '1', '1', '1', '0', '2016-08-22 08:26:05', '2016-08-30 09:42:26');
INSERT INTO `equipment` VALUES ('10', '大厅电视', '3', '3', '0', '0', '2016-08-31 10:25:47', '2016-08-31 10:41:29');
INSERT INTO `equipment` VALUES ('11', '主卧灯', '4', '1', '1', '0', '2016-08-31 10:33:33', '2016-09-01 17:03:58');
INSERT INTO `equipment` VALUES ('12', '前台灯', '3', '1', '0', '0', '2016-08-31 11:13:26', '2016-09-12 15:38:24');
INSERT INTO `equipment` VALUES ('13', '大厅灯', '3', '1', '0', '0', '2016-08-31 11:13:46', '2016-09-10 08:38:10');
INSERT INTO `equipment` VALUES ('14', '办公室一灯', '3', '1', '0', '0', '2016-08-31 11:14:07', '2016-08-31 16:28:01');
INSERT INTO `equipment` VALUES ('15', '办公室二灯', '3', '1', '0', '0', '2016-08-31 11:14:19', '2016-09-12 15:38:24');
INSERT INTO `equipment` VALUES ('16', '卫生间灯', '4', '1', '0', '0', '2016-08-31 15:08:33', '2016-08-31 15:08:33');
INSERT INTO `equipment` VALUES ('20', '空调', '6', '2', '1', '0', '2016-09-01 10:32:06', '2016-09-23 08:36:48');
INSERT INTO `equipment` VALUES ('21', '风扇1', '7', '4', '0', '0', '2016-09-01 10:33:43', '2016-09-01 10:33:43');
INSERT INTO `equipment` VALUES ('22', '风扇2', '7', '4', '0', '0', '2016-09-01 10:33:49', '2016-09-01 10:33:49');
INSERT INTO `equipment` VALUES ('23', '大厅电视', '7', '3', '0', '0', '2016-09-01 10:33:55', '2016-09-01 10:33:55');
INSERT INTO `equipment` VALUES ('24', '灯1', '2', '1', '1', '0', '2016-09-01 15:44:48', '2016-09-01 17:03:58');
INSERT INTO `equipment` VALUES ('27', '灯', '4', '1', '0', '0', '2016-09-10 08:23:38', '2016-09-10 08:23:38');
INSERT INTO `equipment` VALUES ('28', '空调', '5', '2', '1', '0', '2016-09-10 08:25:52', '2016-09-14 12:01:17');
INSERT INTO `equipment` VALUES ('29', '空调', '11', '2', '1', '0', '2016-09-10 08:26:09', '2016-09-10 08:38:10');
INSERT INTO `equipment` VALUES ('30', '办公室总灯', '3', '1', '1', '0', '2016-09-10 11:35:02', '2016-09-12 14:46:21');
INSERT INTO `equipment` VALUES ('31', '办公室-过道大灯', '3', '1', '1', '0', '2016-09-10 15:07:57', '2016-09-12 14:38:14');
INSERT INTO `equipment` VALUES ('32', '大厅空调', '8', '2', '0', '0', '2016-09-13 09:46:31', '2016-09-23 08:40:18');
INSERT INTO `equipment` VALUES ('38', '灯1', '6', '1', '1', '0', '2016-09-13 15:21:45', '2016-09-21 14:23:34');
INSERT INTO `equipment` VALUES ('39', '美的风扇', '6', '4', '0', '0', '2016-09-18 09:38:18', '2016-09-23 08:38:19');
INSERT INTO `equipment` VALUES ('40', '电视', '6', '3', '1', '0', '2016-09-19 15:37:47', '2016-09-22 17:28:54');

-- ----------------------------
-- Table structure for `equipment_distribute`
-- ----------------------------
DROP TABLE IF EXISTS `equipment_distribute`;
CREATE TABLE `equipment_distribute` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `from` int(11) DEFAULT NULL COMMENT '分配人',
  `to` int(11) DEFAULT NULL COMMENT '被分配人',
  `equipments` varchar(1000) DEFAULT NULL COMMENT '分配的设备',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of equipment_distribute
-- ----------------------------
INSERT INTO `equipment_distribute` VALUES ('50', '28', '29', '24', '2016-09-03 09:25:26', '2016-09-03 09:25:26');
INSERT INTO `equipment_distribute` VALUES ('64', '29', '30', '20', '2016-09-03 10:44:43', '2016-09-03 10:44:43');
INSERT INTO `equipment_distribute` VALUES ('66', '26', '30', '12', '2016-09-08 17:24:18', '2016-09-08 17:24:18');
INSERT INTO `equipment_distribute` VALUES ('67', '26', '30', '13', '2016-09-08 17:24:18', '2016-09-08 17:24:18');
INSERT INTO `equipment_distribute` VALUES ('68', '26', '30', '16', '2016-09-10 11:35:49', '2016-09-10 11:35:49');
INSERT INTO `equipment_distribute` VALUES ('69', '26', '30', '27', '2016-09-10 11:35:49', '2016-09-10 11:35:49');
INSERT INTO `equipment_distribute` VALUES ('71', '29', '26', '20', '2016-09-13 10:30:42', '2016-09-13 10:30:42');
INSERT INTO `equipment_distribute` VALUES ('73', '29', '26', '32', '2016-09-13 10:32:30', '2016-09-13 10:32:30');
INSERT INTO `equipment_distribute` VALUES ('74', '25', '28', '1', '2016-09-14 16:47:06', '2016-09-14 16:47:06');
INSERT INTO `equipment_distribute` VALUES ('75', '25', '28', '2', '2016-09-14 16:47:06', '2016-09-14 16:47:06');

-- ----------------------------
-- Table structure for `equipment_group`
-- ----------------------------
DROP TABLE IF EXISTS `equipment_group`;
CREATE TABLE `equipment_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL COMMENT '分组名',
  `equipments` varchar(2000) DEFAULT NULL COMMENT '设备id',
  `user_id` varchar(45) NOT NULL COMMENT '所属用户',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `index_equipgroup` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8 COMMENT='设备分组';

-- ----------------------------
-- Records of equipment_group
-- ----------------------------
INSERT INTO `equipment_group` VALUES ('21', '分组一', '20', '29', '2016-09-02 09:54:32', '2016-09-02 09:54:32');
INSERT INTO `equipment_group` VALUES ('22', '我的分组二', '20', '29', '2016-09-02 09:54:58', '2016-09-02 09:54:58');
INSERT INTO `equipment_group` VALUES ('25', '公司前台', '12', '26', '2016-09-02 10:05:31', '2016-09-02 10:05:31');
INSERT INTO `equipment_group` VALUES ('26', '公司前台', '13', '26', '2016-09-02 10:05:31', '2016-09-02 10:05:31');
INSERT INTO `equipment_group` VALUES ('36', 'mine', '20', '30', '2016-09-03 15:48:59', '2016-09-03 15:48:59');
INSERT INTO `equipment_group` VALUES ('37', '公司前台', '29', '26', '2016-09-10 08:27:42', '2016-09-10 08:27:42');
INSERT INTO `equipment_group` VALUES ('39', 'mine', '12', '26', '2016-09-10 11:06:46', '2016-09-10 11:06:46');
INSERT INTO `equipment_group` VALUES ('42', 'mine', '15', '26', '2016-09-10 11:06:46', '2016-09-10 11:06:46');
INSERT INTO `equipment_group` VALUES ('43', '发发发', '11', '26', '2016-09-10 14:32:15', '2016-09-10 14:32:15');
INSERT INTO `equipment_group` VALUES ('44', '发发发', '16', '26', '2016-09-10 14:32:15', '2016-09-10 14:32:15');
INSERT INTO `equipment_group` VALUES ('45', '发发发', '27', '26', '2016-09-10 14:32:15', '2016-09-10 14:32:15');
INSERT INTO `equipment_group` VALUES ('46', '发发发', '28', '26', '2016-09-10 14:32:15', '2016-09-10 14:32:15');
INSERT INTO `equipment_group` VALUES ('47', 'ggg', '12', '26', '2016-09-10 14:32:31', '2016-09-10 14:32:31');
INSERT INTO `equipment_group` VALUES ('48', 'ggg', '13', '26', '2016-09-10 14:32:31', '2016-09-10 14:32:31');
INSERT INTO `equipment_group` VALUES ('49', 'ggg', '14', '26', '2016-09-10 14:32:31', '2016-09-10 14:32:31');
INSERT INTO `equipment_group` VALUES ('50', 'ggg', '15', '26', '2016-09-10 14:32:31', '2016-09-10 14:32:31');
INSERT INTO `equipment_group` VALUES ('51', 'ggg', '30', '26', '2016-09-10 14:32:31', '2016-09-10 14:32:31');
INSERT INTO `equipment_group` VALUES ('52', 'ggd', '11', '26', '2016-09-10 14:33:04', '2016-09-10 14:33:04');
INSERT INTO `equipment_group` VALUES ('53', 'ggd', '16', '26', '2016-09-10 14:33:04', '2016-09-10 14:33:04');
INSERT INTO `equipment_group` VALUES ('54', 'ggd', '27', '26', '2016-09-10 14:33:04', '2016-09-10 14:33:04');
INSERT INTO `equipment_group` VALUES ('55', 'ggd', '28', '26', '2016-09-10 14:33:04', '2016-09-10 14:33:04');
INSERT INTO `equipment_group` VALUES ('56', 'ggd', '29', '26', '2016-09-10 14:33:04', '2016-09-10 14:33:04');
INSERT INTO `equipment_group` VALUES ('57', '666', '12', '26', '2016-09-10 14:58:32', '2016-09-10 14:58:32');
INSERT INTO `equipment_group` VALUES ('58', '666', '30', '26', '2016-09-10 14:58:32', '2016-09-10 14:58:32');
INSERT INTO `equipment_group` VALUES ('59', '666', '31', '26', '2016-09-10 15:08:09', '2016-09-10 15:08:09');
INSERT INTO `equipment_group` VALUES ('60', '666', '32', '26', '2016-09-10 15:53:45', '2016-09-10 15:53:45');
INSERT INTO `equipment_group` VALUES ('61', '去轻轻去去去去去去去去去去去去', '12', '26', '2016-09-10 16:06:53', '2016-09-10 16:06:53');
INSERT INTO `equipment_group` VALUES ('62', '去轻轻去去去去去去去去去去去去', '13', '26', '2016-09-10 16:06:53', '2016-09-10 16:06:53');
INSERT INTO `equipment_group` VALUES ('63', '去轻轻去去去去去去去去去去去去', '14', '26', '2016-09-10 16:06:53', '2016-09-10 16:06:53');
INSERT INTO `equipment_group` VALUES ('64', '去轻轻去去去去去去去去去去去去', '15', '26', '2016-09-10 16:06:53', '2016-09-10 16:06:53');
INSERT INTO `equipment_group` VALUES ('65', '去轻轻去去去去去去去去去去去去', '30', '26', '2016-09-10 16:06:53', '2016-09-10 16:06:53');
INSERT INTO `equipment_group` VALUES ('66', '去轻轻去去去去去去去去去去去去', '31', '26', '2016-09-10 16:06:53', '2016-09-10 16:06:53');
INSERT INTO `equipment_group` VALUES ('67', '去轻轻去去去去去去去去去去去去', '32', '26', '2016-09-10 16:06:53', '2016-09-10 16:06:53');
INSERT INTO `equipment_group` VALUES ('68', '我的分组', '1', '25', '2016-09-14 16:53:23', '2016-09-14 16:53:23');
INSERT INTO `equipment_group` VALUES ('69', '我的分组', '2', '25', '2016-09-14 16:53:23', '2016-09-14 16:53:23');

-- ----------------------------
-- Table structure for `equipment_type`
-- ----------------------------
DROP TABLE IF EXISTS `equipment_type`;
CREATE TABLE `equipment_type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '' COMMENT '设备类型名称',
  `table_name` varchar(40) NOT NULL DEFAULT '' COMMENT '对应表名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of equipment_type
-- ----------------------------
INSERT INTO `equipment_type` VALUES ('1', '灯', 'light');
INSERT INTO `equipment_type` VALUES ('2', '空调', 'air_condition');
INSERT INTO `equipment_type` VALUES ('3', '电视', 'television');
INSERT INTO `equipment_type` VALUES ('4', '风扇', 'fan');

-- ----------------------------
-- Table structure for `fan`
-- ----------------------------
DROP TABLE IF EXISTS `fan`;
CREATE TABLE `fan` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `equipment_id` int(11) NOT NULL DEFAULT '0' COMMENT '设备id',
  `speed` int(11) NOT NULL DEFAULT '1' COMMENT '风速  0低 1中 2高',
  `swing_wind` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '是否左右摆风  0否  1是',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fan
-- ----------------------------
INSERT INTO `fan` VALUES ('1', '21', '1', '0', '2016-09-13 14:35:41', '2016-09-13 14:35:44');
INSERT INTO `fan` VALUES ('2', '22', '1', '0', '2016-09-13 14:35:52', '2016-09-13 14:35:55');
INSERT INTO `fan` VALUES ('3', '39', '1', '1', '2016-09-18 11:07:07', '2016-09-23 08:38:18');

-- ----------------------------
-- Table structure for `friend`
-- ----------------------------
DROP TABLE IF EXISTS `friend`;
CREATE TABLE `friend` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid1` int(11) NOT NULL,
  `userid2` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `index_friend` (`userid1`,`userid2`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8 COMMENT='好友';

-- ----------------------------
-- Records of friend
-- ----------------------------
INSERT INTO `friend` VALUES ('39', '28', '25', '2016-09-02 08:57:15', '2016-09-02 08:57:15');
INSERT INTO `friend` VALUES ('40', '29', '30', '2016-09-02 09:01:13', '2016-09-02 09:01:13');
INSERT INTO `friend` VALUES ('41', '30', '26', '2016-09-02 10:05:00', '2016-09-02 10:05:00');
INSERT INTO `friend` VALUES ('42', '29', '26', '2016-09-07 16:40:32', '2016-09-07 16:40:32');
INSERT INTO `friend` VALUES ('43', '32', '26', '2016-09-07 16:45:33', '2016-09-07 16:45:33');
INSERT INTO `friend` VALUES ('44', '28', '26', '2016-09-07 16:45:46', '2016-09-07 16:45:46');
INSERT INTO `friend` VALUES ('45', '29', '25', '2016-09-12 16:59:16', '2016-09-12 16:59:16');
INSERT INTO `friend` VALUES ('46', '29', '32', '2016-09-12 17:40:18', '2016-09-12 17:40:18');
INSERT INTO `friend` VALUES ('48', '26', '31', '2016-09-12 17:53:25', '2016-09-12 17:53:25');
INSERT INTO `friend` VALUES ('49', '31', '25', '2016-09-12 17:56:18', '2016-09-12 17:56:18');
INSERT INTO `friend` VALUES ('52', '29', '31', '2016-09-13 09:19:19', '2016-09-13 09:19:19');

-- ----------------------------
-- Table structure for `friend_group`
-- ----------------------------
DROP TABLE IF EXISTS `friend_group`;
CREATE TABLE `friend_group` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL DEFAULT '默认' COMMENT '好友分组名',
  `user_id` int(11) NOT NULL DEFAULT '0' COMMENT '用户id',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `index_friendgroup` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of friend_group
-- ----------------------------
INSERT INTO `friend_group` VALUES ('1', '默认', '25', '2016-09-03 08:24:23', '2016-09-03 08:24:25');
INSERT INTO `friend_group` VALUES ('2', '默认', '26', '2016-09-03 08:24:48', '2016-09-03 08:24:50');
INSERT INTO `friend_group` VALUES ('3', '默认', '28', '2016-09-03 08:25:11', '2016-09-03 08:25:14');
INSERT INTO `friend_group` VALUES ('4', '默认', '29', '2016-09-03 08:25:22', '2016-09-03 08:25:25');
INSERT INTO `friend_group` VALUES ('5', '默认', '30', '2016-09-03 08:25:34', '2016-09-03 08:25:36');
INSERT INTO `friend_group` VALUES ('6', '默认', '31', '2016-09-03 08:26:02', '2016-09-03 08:26:05');
INSERT INTO `friend_group` VALUES ('13', '亲戚', '30', '2016-09-03 16:02:20', '2016-09-03 16:02:20');
INSERT INTO `friend_group` VALUES ('14', '默认', '32', '2016-09-07 14:15:47', '2016-09-07 14:15:47');
INSERT INTO `friend_group` VALUES ('16', '公司', '29', '2016-09-07 16:36:30', '2016-09-07 16:36:30');
INSERT INTO `friend_group` VALUES ('17', '好友', '26', '2016-09-10 11:13:22', '2016-09-10 11:13:22');

-- ----------------------------
-- Table structure for `friend_group_detail`
-- ----------------------------
DROP TABLE IF EXISTS `friend_group_detail`;
CREATE TABLE `friend_group_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL COMMENT '分组id',
  `users` int(11) DEFAULT NULL COMMENT '分组里好友',
  `user_id` int(11) NOT NULL COMMENT '分组所属人',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of friend_group_detail
-- ----------------------------
INSERT INTO `friend_group_detail` VALUES ('4', '1', '28', '25', '2016-09-02 08:22:07', '2016-09-02 08:57:15');
INSERT INTO `friend_group_detail` VALUES ('5', '5', '29', '30', '2016-09-02 08:24:59', '2016-09-03 16:01:23');
INSERT INTO `friend_group_detail` VALUES ('6', '3', '25', '28', '2016-09-02 08:51:56', '2016-09-02 08:57:15');
INSERT INTO `friend_group_detail` VALUES ('50', '4', '30', '29', '2016-09-02 09:01:13', '2016-09-18 09:04:01');
INSERT INTO `friend_group_detail` VALUES ('54', '5', '26', '30', '2016-09-02 10:05:00', '2016-09-03 16:01:23');
INSERT INTO `friend_group_detail` VALUES ('55', '2', '30', '26', '2016-09-02 10:05:00', '2016-09-07 17:23:18');
INSERT INTO `friend_group_detail` VALUES ('56', '4', '26', '29', '2016-09-07 16:40:32', '2016-09-18 09:04:01');
INSERT INTO `friend_group_detail` VALUES ('57', '2', '29', '26', '2016-09-07 16:40:32', '2016-09-07 17:23:18');
INSERT INTO `friend_group_detail` VALUES ('58', '14', '26', '32', '2016-09-07 16:45:33', '2016-09-07 16:45:33');
INSERT INTO `friend_group_detail` VALUES ('59', '2', '32', '26', '2016-09-07 16:45:33', '2016-09-07 17:26:08');
INSERT INTO `friend_group_detail` VALUES ('60', '3', '26', '28', '2016-09-07 16:45:46', '2016-09-07 16:45:46');
INSERT INTO `friend_group_detail` VALUES ('61', '2', '28', '26', '2016-09-07 16:45:46', '2016-09-07 17:26:08');
INSERT INTO `friend_group_detail` VALUES ('62', '4', '25', '29', '2016-09-12 16:59:16', '2016-09-18 09:04:01');
INSERT INTO `friend_group_detail` VALUES ('63', '1', '29', '25', '2016-09-12 16:59:16', '2016-09-12 16:59:16');
INSERT INTO `friend_group_detail` VALUES ('64', '16', '32', '29', '2016-09-12 17:40:18', '2016-09-14 16:57:19');
INSERT INTO `friend_group_detail` VALUES ('65', '14', '29', '32', '2016-09-12 17:40:18', '2016-09-12 17:40:18');
INSERT INTO `friend_group_detail` VALUES ('68', '2', '31', '26', '2016-09-12 17:53:25', '2016-09-12 17:53:25');
INSERT INTO `friend_group_detail` VALUES ('69', '6', '26', '31', '2016-09-12 17:53:25', '2016-09-12 17:53:25');
INSERT INTO `friend_group_detail` VALUES ('70', '6', '25', '31', '2016-09-12 17:56:18', '2016-09-12 17:56:18');
INSERT INTO `friend_group_detail` VALUES ('71', '1', '31', '25', '2016-09-12 17:56:19', '2016-09-12 17:56:19');
INSERT INTO `friend_group_detail` VALUES ('76', '16', '31', '29', '2016-09-13 09:19:19', '2016-09-14 16:57:19');
INSERT INTO `friend_group_detail` VALUES ('77', '6', '29', '31', '2016-09-13 09:19:19', '2016-09-13 09:19:19');

-- ----------------------------
-- Table structure for `friend_request`
-- ----------------------------
DROP TABLE IF EXISTS `friend_request`;
CREATE TABLE `friend_request` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `from` int(11) NOT NULL COMMENT '添加人',
  `to` int(11) NOT NULL COMMENT '被添加人',
  `pass` char(1) NOT NULL DEFAULT '2' COMMENT '是否通过请求   1通过   0不通过  2未处理  3处理完成',
  `group` varchar(45) NOT NULL COMMENT '想要添加的分组',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of friend_request
-- ----------------------------
INSERT INTO `friend_request` VALUES ('3', '29', '28', '2', '16', '2016-09-07 16:37:22', '2016-09-07 16:37:22');
INSERT INTO `friend_request` VALUES ('6', '28', '26', '1', '3', '2016-09-07 16:42:24', '2016-09-07 16:42:24');

-- ----------------------------
-- Table structure for `host`
-- ----------------------------
DROP TABLE IF EXISTS `host`;
CREATE TABLE `host` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `user_id` int(11) NOT NULL DEFAULT '0',
  `type_id` int(11) NOT NULL COMMENT '主机类型',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `index_hostname` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COMMENT='主机';

-- ----------------------------
-- Records of host
-- ----------------------------
INSERT INTO `host` VALUES ('1', 'h1', '111', '25', '1', '2016-08-19 16:40:03', '2016-08-20 08:29:52');
INSERT INTO `host` VALUES ('2', 'h2', '111', '28', '1', '2016-08-19 16:40:21', '2016-08-23 07:22:45');
INSERT INTO `host` VALUES ('3', '公司', '111', '26', '1', '2016-08-26 15:33:58', '2016-08-30 14:57:25');
INSERT INTO `host` VALUES ('4', '我家', '111', '26', '1', '2016-08-31 10:03:12', '2016-08-31 10:03:14');
INSERT INTO `host` VALUES ('5', '我的秘密', '111', '26', '2', '2016-08-31 15:11:26', '2016-08-31 15:20:43');
INSERT INTO `host` VALUES ('6', '公司', '111', '29', '2', '2016-08-31 17:20:05', '2016-09-01 10:30:48');
INSERT INTO `host` VALUES ('7', 'xxx', '111', '31', '3', '2016-08-31 17:20:18', '2016-09-01 10:33:33');
INSERT INTO `host` VALUES ('8', 'www', '111', '29', '2', '2016-08-31 17:20:32', '2016-09-01 11:13:09');
INSERT INTO `host` VALUES ('9', '别墅', '2232', '26', '1', '2016-09-02 11:09:11', '2016-09-02 11:09:11');
INSERT INTO `host` VALUES ('10', '我的办公室', '111111', '32', '2', '2016-09-07 14:16:36', '2016-09-07 14:16:36');
INSERT INTO `host` VALUES ('11', '主机1', '12131', '26', '3', '2016-09-10 08:24:19', '2016-09-10 08:24:19');

-- ----------------------------
-- Table structure for `host_type`
-- ----------------------------
DROP TABLE IF EXISTS `host_type`;
CREATE TABLE `host_type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '' COMMENT '主机类型',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of host_type
-- ----------------------------
INSERT INTO `host_type` VALUES ('1', 'v1', '2016-09-02 10:41:27', '2016-09-02 10:41:30');
INSERT INTO `host_type` VALUES ('2', 'v2', '2016-09-02 10:41:36', '2016-09-02 10:41:39');
INSERT INTO `host_type` VALUES ('3', 'v3', '2016-09-02 10:41:46', '2016-09-02 10:41:48');

-- ----------------------------
-- Table structure for `light`
-- ----------------------------
DROP TABLE IF EXISTS `light`;
CREATE TABLE `light` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `equipment_id` int(11) NOT NULL DEFAULT '0' COMMENT '设备id',
  `light` float(10,2) unsigned NOT NULL DEFAULT '100.00' COMMENT '亮度  0~100',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of light
-- ----------------------------
INSERT INTO `light` VALUES ('1', '2', '100.00', '2016-09-13 14:37:10', '2016-09-13 14:37:12');
INSERT INTO `light` VALUES ('2', '11', '100.00', '2016-09-13 14:37:33', '2016-09-13 14:37:36');
INSERT INTO `light` VALUES ('3', '12', '100.00', '2016-09-13 14:39:12', '2016-09-13 14:39:15');
INSERT INTO `light` VALUES ('4', '13', '100.00', '2016-09-13 14:39:09', '2016-09-13 14:39:10');
INSERT INTO `light` VALUES ('5', '14', '100.00', '2016-09-13 14:39:05', '2016-09-13 14:39:08');
INSERT INTO `light` VALUES ('6', '15', '100.00', '2016-09-13 14:39:02', '2016-09-13 14:39:04');
INSERT INTO `light` VALUES ('7', '16', '100.00', '2016-09-13 14:39:00', '2016-09-13 14:39:01');
INSERT INTO `light` VALUES ('8', '24', '100.00', '2016-09-13 14:38:57', '2016-09-13 14:38:59');
INSERT INTO `light` VALUES ('10', '27', '100.00', '2016-09-13 14:38:48', '2016-09-13 14:38:50');
INSERT INTO `light` VALUES ('11', '30', '100.00', '2016-09-13 14:38:45', '2016-09-13 14:38:47');
INSERT INTO `light` VALUES ('12', '31', '100.00', '2016-09-13 14:38:54', '2016-09-13 14:38:52');
INSERT INTO `light` VALUES ('15', '38', '32.43', '2016-09-13 15:21:45', '2016-09-23 08:39:20');

-- ----------------------------
-- Table structure for `television`
-- ----------------------------
DROP TABLE IF EXISTS `television`;
CREATE TABLE `television` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `equipment_id` int(11) NOT NULL DEFAULT '0' COMMENT '设备id',
  `channel` int(11) NOT NULL DEFAULT '0' COMMENT '频道 0-200',
  `volume` int(11) NOT NULL DEFAULT '20' COMMENT '音量 0-100',
  `model` int(11) NOT NULL DEFAULT '0' COMMENT '模式 0正常  1冷色  2暖色',
  `silent` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '0没静音  1静音',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of television
-- ----------------------------
INSERT INTO `television` VALUES ('1', '1', '15', '20', '0', '0', '2016-09-12 16:43:04', '2016-09-12 16:43:04');
INSERT INTO `television` VALUES ('2', '23', '6', '70', '0', '0', '2016-09-12 16:43:18', '2016-09-12 16:43:21');
INSERT INTO `television` VALUES ('3', '10', '22', '20', '0', '0', '2016-09-13 14:40:12', '2016-09-13 14:40:09');
INSERT INTO `television` VALUES ('4', '40', '2', '1', '2', '0', '2016-09-19 15:37:47', '2016-09-23 08:37:53');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) DEFAULT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_admin` int(11) NOT NULL DEFAULT '0',
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 COMMENT='用户';

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('25', 'number5', '212@qq.com', '$2y$10$KuHvJSpQ67mzb0PieXkxPuJ3OsnwekOQuDev4aFKm85bR/S9g2Xme', '1', 'jRoYZmA0vhpaf7oe5Lqt1sdzHrukazOVFaohsuBp5oZ1sFj7pFzRLc2pap50', '2016-08-18 08:32:04', '2016-09-14 16:56:06');
INSERT INTO `users` VALUES ('26', '6666', '211@qq.com', '$2y$10$0oub3VxuiKwfmsKPlEw.tuXjx7evlAUFoiPaGgAQ/SKc1BzxdEE5S', '1', 'PwX8KZFGltaa4M0loELfWlzk7NbtU9tJcsvqbo4m6JZrnaUngFIgWLTQE4cH', '2016-08-18 08:46:04', '2016-09-13 10:56:16');
INSERT INTO `users` VALUES ('28', 'xxx', '210@qq.com', '$2y$10$KZP6FXg5A6oPihRaZNEbAeLBTYvI6dnHOeF7J.b/E0xSl7jBlMF.O', '1', '6wblW2pOTXYMING5fFhJHu8tx5N0LihUxC3acLAUPqjErff3Z9QPlCBDVoOh', '2016-08-18 08:55:12', '2016-09-07 16:42:35');
INSERT INTO `users` VALUES ('29', 'bbbb', '213@qq.com', '$2y$10$N0FpqOnYfu17UYwcXicqjuLkA2Pb9fhGE8sttWQoGbKuilKABBdlu', '1', 'vPzwNq3UTnU4TPj8IN1mj6CqaqqVCb8ZbgO9XagBrJVvCv34oHOBInWRjl9s', '2016-08-20 09:03:48', '2016-09-14 16:40:57');
INSERT INTO `users` VALUES ('30', 'xc', '214@qq.com', '$2y$10$NPw/24kG588Dd7ZagrwYE.7i42eJ9OkCS81RO0NMB8CeTL.2U5ESK', '0', 'sqCoHcrDvUQmWYShtmylbsNLkAnG9FaALe3acn4gJqTAjrqedfGSDOavaSkA', '2016-08-31 17:21:44', '2016-09-14 16:41:44');
INSERT INTO `users` VALUES ('31', 'xx', '222@qq.com', '$2y$10$EeeZOHftT/OjYvfU.laCnuQNjveVCsTE0cgOgGUAAjxF5HCAs6Cu.', '1', 'RbDy9AfepyPP4cmgAd5JUSJxlV4IzLFs29iJGy1sgSqD7ffcbYoNbhH0Ge7J', '2016-09-01 09:59:24', '2016-09-13 09:19:24');
INSERT INTO `users` VALUES ('32', 'xx', '215@qq.com', '$2y$10$TYgnwkjMr0X7X/k/xFBdi.cJjE7ZfUMZJe0GUnOsHyZ9NeSheVU8i', '1', 'oVe2mmZK4B2Dmun4VPC8XBUjHsMnHeBhx5ujoF4WtpKaPYKFKKncdCMgTWyb', '2016-09-07 14:15:47', '2016-09-12 17:40:35');
