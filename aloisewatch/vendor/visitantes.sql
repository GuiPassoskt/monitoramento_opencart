CREATE TABLE  `visitante_online` (
  `idvisitante_online` int(10) unsigned NOT NULL auto_increment,
  `timestamp` int(15) unsigned NOT NULL,
  `ip` varchar(45) NOT NULL,
  `url` text NOT NULL,
  PRIMARY KEY  (`idvisitante_online`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;