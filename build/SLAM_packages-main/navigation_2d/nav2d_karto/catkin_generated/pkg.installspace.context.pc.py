# generated from catkin/cmake/template/pkg.context.pc.in
CATKIN_PACKAGE_PREFIX = ""
PROJECT_PKG_CONFIG_INCLUDE_DIRS = "${prefix}/include".split(';') if "${prefix}/include" != "" else []
PROJECT_CATKIN_DEPENDS = "roscpp;tf;nav_msgs;geometry_msgs;visualization_msgs;nav2d_msgs;nav2d_localizer".replace(';', ' ')
PKG_CONFIG_LIBRARIES_WITH_PREFIX = "-lOpenKarto;-lMultiMapper".split(';') if "-lOpenKarto;-lMultiMapper" != "" else []
PROJECT_NAME = "nav2d_karto"
PROJECT_SPACE_DIR = "/home/cristina/new_ws/install"
PROJECT_VERSION = "0.3.2"
