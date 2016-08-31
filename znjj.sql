/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50629
Source Host           : localhost:3306
Source Database       : znjj

Target Server Type    : MYSQL
Target Server Version : 50629
File Encoding         : 65001

Date: 2016-08-31 08:03:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `equipment`
-- ----------------------------
DROP TABLE IF EXISTS `equipment`;
CREATE TABLE `equipment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL DEFAULT '',
  `host_id` int(11) NOT NULL DEFAULT '0' COMMENT '所属主机id',
  `status` varchar(45) NOT NULL DEFAULT '0' COMMENT '设备状态',
  `is_deleted` int(11) NOT NULL DEFAULT '0' COMMENT '0未从主机移除   1已从主机移除',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COMMENT='设备';

-- ----------------------------
-- Records of equipment
-- ----------------------------
INSERT INTO `equipment` VALUES ('1', '电视', '1', '0', '1', '2016-08-22 08:25:27', '2016-08-23 03:01:55');
INSERT INTO `equipment` VALUES ('2', '卫生间灯', '1', '1', '0', '2016-08-22 08:26:05', '2016-08-30 09:42:26');
INSERT INTO `equipment` VALUES ('3', 'bbb', '1', '0', '0', '2016-08-23 08:06:20', '2016-08-23 02:15:57');
INSERT INTO `equipment` VALUES ('4', 'ccc', '1', '0', '0', '2016-08-23 08:06:30', '2016-08-23 06:13:41');
INSERT INTO `equipment` VALUES ('5', 'ddd', '1', '0', '0', '2016-08-23 08:06:48', '2016-08-23 06:13:41');
INSERT INTO `equipment` VALUES ('6', 'f', '2', '0', '0', null, null);
INSERT INTO `equipment` VALUES ('7', 'e', '2', '0', '0', null, null);
INSERT INTO `equipment` VALUES ('8', 'g', '2', '0', '0', null, null);
INSERT INTO `equipment` VALUES ('9', '3ee', '2', '0', '0', null, null);

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of equipment_distribute
-- ----------------------------
INSERT INTO `equipment_distribute` VALUES ('1', '25', '26', '2,', '2016-08-23 06:43:23', '2016-08-23 07:14:57');
INSERT INTO `equipment_distribute` VALUES ('2', '25', '26', null, '2016-08-23 06:46:00', '2016-08-23 06:46:00');
INSERT INTO `equipment_distribute` VALUES ('3', '25', '28', '2,3,', '2016-08-23 07:17:45', '2016-08-23 07:17:52');

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='设备分组';

-- ----------------------------
-- Records of equipment_group
-- ----------------------------
INSERT INTO `equipment_group` VALUES ('1', '改革', '4,5,2,', '25', '2016-08-22 09:50:08', '2016-08-23 06:13:54');
INSERT INTO `equipment_group` VALUES ('3', 'aa', '2,', '26', '2016-08-29 16:28:48', '2016-08-29 16:28:48');

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8 COMMENT='好友';

-- ----------------------------
-- Records of friend
-- ----------------------------
INSERT INTO `friend` VALUES ('28', '26', '25', '2016-08-19 03:50:30', '2016-08-19 03:50:30');
INSERT INTO `friend` VALUES ('29', '25', '28', '2016-08-19 03:55:09', '2016-08-19 03:55:09');
INSERT INTO `friend` VALUES ('31', '29', '25', '2016-08-20 09:04:23', '2016-08-20 09:04:23');

-- ----------------------------
-- Table structure for `friend_group`
-- ----------------------------
DROP TABLE IF EXISTS `friend_group`;
CREATE TABLE `friend_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL COMMENT '分组名',
  `users` varchar(2000) DEFAULT NULL COMMENT '分组里的所有好友',
  `user_id` int(11) NOT NULL COMMENT '分组所属人',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of friend_group
-- ----------------------------
INSERT INTO `friend_group` VALUES ('37', '默认', '25,', '28', '2016-08-18 08:55:12', '2016-08-18 08:55:12');
INSERT INTO `friend_group` VALUES ('38', '默认', '26,', '25', '2016-08-18 16:56:09', '2016-08-18 16:56:11');
INSERT INTO `friend_group` VALUES ('39', '默认', '25,', '26', '2016-08-18 16:56:20', '2016-08-18 16:56:23');
INSERT INTO `friend_group` VALUES ('40', '好友', '28,29,', '25', '2016-08-20 17:00:28', '2016-08-20 17:00:30');
INSERT INTO `friend_group` VALUES ('41', '默认', '25,', '29', '2016-08-20 09:03:48', '2016-08-20 09:03:48');
INSERT INTO `friend_group` VALUES ('42', '家人', null, '25', '2016-08-20 09:49:27', '2016-08-20 09:49:27');

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of friend_request
-- ----------------------------
INSERT INTO `friend_request` VALUES ('2', '29', '25', '1', '默认', '2016-08-20 09:04:03', '2016-08-20 09:04:03');

-- ----------------------------
-- Table structure for `host`
-- ----------------------------
DROP TABLE IF EXISTS `host`;
CREATE TABLE `host` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `user_id` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='主机';

-- ----------------------------
-- Records of host
-- ----------------------------
INSERT INTO `host` VALUES ('1', 'h1', '111', '25', '2016-08-19 16:40:03', '2016-08-20 08:29:52');
INSERT INTO `host` VALUES ('2', 'h2', '111', '28', '2016-08-19 16:40:21', '2016-08-23 07:22:45');
INSERT INTO `host` VALUES ('3', 'xssx', '111', '0', '2016-08-26 15:33:58', '2016-08-30 14:57:25');

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8 COMMENT='用户';

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('25', 'number5', '212@qq.com', '$2y$10$KuHvJSpQ67mzb0PieXkxPuJ3OsnwekOQuDev4aFKm85bR/S9g2Xme', '1', 'MIeD3QffaFldxzbSIK4RjuPwPbtLHIaMJryH6KEOELwt1j8a3DyRQtX75k7p', '2016-08-18 08:32:04', '2016-08-26 15:21:21');
INSERT INTO `users` VALUES ('26', '6666', '211@qq.com', '$2y$10$0oub3VxuiKwfmsKPlEw.tuXjx7evlAUFoiPaGgAQ/SKc1BzxdEE5S', '1', 'vg6kjeFSeTe8jxAGn7RNnTJzahducbSkqfFo5Pv0yichBYfAb0D6VlxP2Uit', '2016-08-18 08:46:04', '2016-08-30 14:57:25');
INSERT INTO `users` VALUES ('28', 'xxx', '210@qq.com', '$2y$10$KZP6FXg5A6oPihRaZNEbAeLBTYvI6dnHOeF7J.b/E0xSl7jBlMF.O', '1', 'Vn9krrx34VubOwOD1Ig0dueqrbgQ4Snxb3UeTSL2XRRqCHQbUb3TxRdlpdsL', '2016-08-18 08:55:12', '2016-08-23 07:22:45');
INSERT INTO `users` VALUES ('29', 'bbbb', '213@qq.com', '$2y$10$N0FpqOnYfu17UYwcXicqjuLkA2Pb9fhGE8sttWQoGbKuilKABBdlu', '0', 'KZb2EKjq7iygOakkhBoPNiQsUnLG8qxJ3u8oNTuniEvwOwXuS5ntB6FvFWpi', '2016-08-20 09:03:48', '2016-08-20 09:04:15');
