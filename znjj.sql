/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50629
Source Host           : localhost:3306
Source Database       : znjj

Target Server Type    : MYSQL
Target Server Version : 50629
File Encoding         : 65001

Date: 2016-09-07 17:33:09
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
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COMMENT='设备';

-- ----------------------------
-- Records of equipment
-- ----------------------------
INSERT INTO `equipment` VALUES ('1', '电视', '1', '0', '1', '2016-08-22 08:25:27', '2016-08-23 03:01:55');
INSERT INTO `equipment` VALUES ('2', '卫生间灯', '1', '1', '0', '2016-08-22 08:26:05', '2016-08-30 09:42:26');
INSERT INTO `equipment` VALUES ('10', '大厅灯', '3', '0', '1', '2016-08-31 10:25:47', '2016-08-31 10:41:29');
INSERT INTO `equipment` VALUES ('11', '主卧灯', '4', '1', '0', '2016-08-31 10:33:33', '2016-09-01 17:03:58');
INSERT INTO `equipment` VALUES ('12', '前台灯', '3', '1', '0', '2016-08-31 11:13:26', '2016-09-03 10:32:13');
INSERT INTO `equipment` VALUES ('13', '大厅灯', '3', '1', '0', '2016-08-31 11:13:46', '2016-09-03 10:32:13');
INSERT INTO `equipment` VALUES ('14', '办公室一灯', '3', '0', '0', '2016-08-31 11:14:07', '2016-08-31 16:28:01');
INSERT INTO `equipment` VALUES ('15', '办公室二灯', '3', '0', '0', '2016-08-31 11:14:19', '2016-08-31 16:28:01');
INSERT INTO `equipment` VALUES ('16', '卫生间灯', '4', '0', '0', '2016-08-31 15:08:33', '2016-08-31 15:08:33');
INSERT INTO `equipment` VALUES ('20', '灯4', '6', '1', '0', '2016-09-01 10:32:06', '2016-09-03 10:32:13');
INSERT INTO `equipment` VALUES ('21', '1', '7', '0', '0', '2016-09-01 10:33:43', '2016-09-01 10:33:43');
INSERT INTO `equipment` VALUES ('22', '2', '7', '0', '0', '2016-09-01 10:33:49', '2016-09-01 10:33:49');
INSERT INTO `equipment` VALUES ('23', '3', '7', '0', '0', '2016-09-01 10:33:55', '2016-09-01 10:33:55');
INSERT INTO `equipment` VALUES ('24', '灯1', '2', '1', '0', '2016-09-01 15:44:48', '2016-09-01 17:03:58');
INSERT INTO `equipment` VALUES ('26', '卫生间灯一', '6', '1', '0', '2016-09-02 09:53:37', '2016-09-03 10:32:14');

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
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of equipment_distribute
-- ----------------------------
INSERT INTO `equipment_distribute` VALUES ('50', '28', '29', '24', '2016-09-03 09:25:26', '2016-09-03 09:25:26');
INSERT INTO `equipment_distribute` VALUES ('64', '29', '30', '20', '2016-09-03 10:44:43', '2016-09-03 10:44:43');
INSERT INTO `equipment_distribute` VALUES ('65', '29', '30', '26', '2016-09-05 15:30:52', '2016-09-05 15:30:52');

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
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8 COMMENT='设备分组';

-- ----------------------------
-- Records of equipment_group
-- ----------------------------
INSERT INTO `equipment_group` VALUES ('21', '分组一', '20', '29', '2016-09-02 09:54:32', '2016-09-02 09:54:32');
INSERT INTO `equipment_group` VALUES ('22', '我的分组二', '20', '29', '2016-09-02 09:54:58', '2016-09-02 09:54:58');
INSERT INTO `equipment_group` VALUES ('24', '我的分组二', '26', '29', '2016-09-02 09:54:58', '2016-09-02 09:54:58');
INSERT INTO `equipment_group` VALUES ('25', '公司前台', '12', '26', '2016-09-02 10:05:31', '2016-09-02 10:05:31');
INSERT INTO `equipment_group` VALUES ('26', '公司前台', '13', '26', '2016-09-02 10:05:31', '2016-09-02 10:05:31');
INSERT INTO `equipment_group` VALUES ('27', '办公室', '14', '26', '2016-09-02 10:05:44', '2016-09-02 10:05:44');
INSERT INTO `equipment_group` VALUES ('28', '办公室', '15', '26', '2016-09-02 10:05:44', '2016-09-02 10:05:44');
INSERT INTO `equipment_group` VALUES ('36', 'mine', '20', '30', '2016-09-03 15:48:59', '2016-09-03 15:48:59');

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
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8 COMMENT='好友';

-- ----------------------------
-- Records of friend
-- ----------------------------
INSERT INTO `friend` VALUES ('39', '28', '25', '2016-09-02 08:57:15', '2016-09-02 08:57:15');
INSERT INTO `friend` VALUES ('40', '29', '30', '2016-09-02 09:01:13', '2016-09-02 09:01:13');
INSERT INTO `friend` VALUES ('41', '30', '26', '2016-09-02 10:05:00', '2016-09-02 10:05:00');
INSERT INTO `friend` VALUES ('42', '29', '26', '2016-09-07 16:40:32', '2016-09-07 16:40:32');
INSERT INTO `friend` VALUES ('43', '32', '26', '2016-09-07 16:45:33', '2016-09-07 16:45:33');
INSERT INTO `friend` VALUES ('44', '28', '26', '2016-09-07 16:45:46', '2016-09-07 16:45:46');

-- ----------------------------
-- Table structure for `friend_group`
-- ----------------------------
DROP TABLE IF EXISTS `friend_group`;
CREATE TABLE `friend_group` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL DEFAULT '默认' COMMENT '好友分组名',
  `user_id` int(11) NOT NULL DEFAULT '0' COMMENT '用户id',
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

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
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of friend_group_detail
-- ----------------------------
INSERT INTO `friend_group_detail` VALUES ('4', '1', '28', '25', '2016-09-02 08:22:07', '2016-09-02 08:57:15');
INSERT INTO `friend_group_detail` VALUES ('5', '5', '29', '30', '2016-09-02 08:24:59', '2016-09-03 16:01:23');
INSERT INTO `friend_group_detail` VALUES ('6', '3', '25', '28', '2016-09-02 08:51:56', '2016-09-02 08:57:15');
INSERT INTO `friend_group_detail` VALUES ('50', '4', '30', '29', '2016-09-02 09:01:13', '2016-09-03 15:45:09');
INSERT INTO `friend_group_detail` VALUES ('54', '5', '26', '30', '2016-09-02 10:05:00', '2016-09-03 16:01:23');
INSERT INTO `friend_group_detail` VALUES ('55', '2', '30', '26', '2016-09-02 10:05:00', '2016-09-07 17:23:18');
INSERT INTO `friend_group_detail` VALUES ('56', '4', '26', '29', '2016-09-07 16:40:32', '2016-09-07 17:26:35');
INSERT INTO `friend_group_detail` VALUES ('57', '2', '29', '26', '2016-09-07 16:40:32', '2016-09-07 17:23:18');
INSERT INTO `friend_group_detail` VALUES ('58', '14', '26', '32', '2016-09-07 16:45:33', '2016-09-07 16:45:33');
INSERT INTO `friend_group_detail` VALUES ('59', '2', '32', '26', '2016-09-07 16:45:33', '2016-09-07 17:26:08');
INSERT INTO `friend_group_detail` VALUES ('60', '3', '26', '28', '2016-09-07 16:45:46', '2016-09-07 16:45:46');
INSERT INTO `friend_group_detail` VALUES ('61', '2', '28', '26', '2016-09-07 16:45:46', '2016-09-07 17:26:08');

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
INSERT INTO `friend_request` VALUES ('1', '32', '26', '1', '14', '2016-09-07 14:18:04', '2016-09-07 14:18:04');
INSERT INTO `friend_request` VALUES ('2', '29', '25', '2', '15', '2016-09-07 16:36:42', '2016-09-07 16:36:42');
INSERT INTO `friend_request` VALUES ('3', '29', '28', '2', '16', '2016-09-07 16:37:22', '2016-09-07 16:37:22');
INSERT INTO `friend_request` VALUES ('4', '29', '31', '2', '15', '2016-09-07 16:37:57', '2016-09-07 16:37:57');
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
  PRIMARY KEY (`id`)
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

-- ----------------------------
-- Table structure for `host_type`
-- ----------------------------
DROP TABLE IF EXISTS `host_type`;
CREATE TABLE `host_type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '' COMMENT '主机类型',
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of host_type
-- ----------------------------
INSERT INTO `host_type` VALUES ('1', 'v1', '2016-09-02 10:41:27', '2016-09-02 10:41:30');
INSERT INTO `host_type` VALUES ('2', 'v2', '2016-09-02 10:41:36', '2016-09-02 10:41:39');
INSERT INTO `host_type` VALUES ('3', 'v3', '2016-09-02 10:41:46', '2016-09-02 10:41:48');

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
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 COMMENT='用户';

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('25', 'number5', '212@qq.com', '$2y$10$KuHvJSpQ67mzb0PieXkxPuJ3OsnwekOQuDev4aFKm85bR/S9g2Xme', '1', 'KMmAQGM8kc8NTErVMOdcoet6L3Qh8R89tytApKLR7Z6Lm3z09oerd3qoo4NH', '2016-08-18 08:32:04', '2016-09-02 10:02:50');
INSERT INTO `users` VALUES ('26', '6666', '211@qq.com', '$2y$10$0oub3VxuiKwfmsKPlEw.tuXjx7evlAUFoiPaGgAQ/SKc1BzxdEE5S', '1', 'cpG33OLNAWVG5pdsuOvwEnlqKZazcli34RVtDubwyORoLSeToqMxv1x2abim', '2016-08-18 08:46:04', '2016-09-07 17:26:18');
INSERT INTO `users` VALUES ('28', 'xxx', '210@qq.com', '$2y$10$KZP6FXg5A6oPihRaZNEbAeLBTYvI6dnHOeF7J.b/E0xSl7jBlMF.O', '1', '6wblW2pOTXYMING5fFhJHu8tx5N0LihUxC3acLAUPqjErff3Z9QPlCBDVoOh', '2016-08-18 08:55:12', '2016-09-07 16:42:35');
INSERT INTO `users` VALUES ('29', 'bbbb', '213@qq.com', '$2y$10$N0FpqOnYfu17UYwcXicqjuLkA2Pb9fhGE8sttWQoGbKuilKABBdlu', '1', 'tfUeyvcI3Ex6ysJQLdykpeipypovx0jncNvWDUmufozKfVh9DN2YVYa0Tu9J', '2016-08-20 09:03:48', '2016-09-07 16:46:22');
INSERT INTO `users` VALUES ('30', 'xc', '214@qq.com', '$2y$10$NPw/24kG588Dd7ZagrwYE.7i42eJ9OkCS81RO0NMB8CeTL.2U5ESK', '0', 'H6n1XM82WMmzMqlnPBtQ8flp00Ww8NTX8nU2hNz2Gg32XGrMY12K8C9MC4QC', '2016-08-31 17:21:44', '2016-09-03 16:09:47');
INSERT INTO `users` VALUES ('31', 'xx', '222@qq.com', '$2y$10$EeeZOHftT/OjYvfU.laCnuQNjveVCsTE0cgOgGUAAjxF5HCAs6Cu.', '1', '2Rz0aUe6LdFJwda8IOQE8xaPNxoMqdaxSShOaPo3LFn1DUMBxNVn6PVldFbd', '2016-09-01 09:59:24', '2016-09-03 09:32:03');
INSERT INTO `users` VALUES ('32', 'xx', '215@qq.com', '$2y$10$TYgnwkjMr0X7X/k/xFBdi.cJjE7ZfUMZJe0GUnOsHyZ9NeSheVU8i', '1', '1na0Z3njQlFQTIh2OVuszbPxeR279Pq2BTXtWCXmaHmjD9S7SHaIZN68OdPJ', '2016-09-07 14:15:47', '2016-09-07 16:35:13');
