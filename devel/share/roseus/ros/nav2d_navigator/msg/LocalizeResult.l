;; Auto-generated. Do not edit!


(when (boundp 'nav2d_navigator::LocalizeResult)
  (if (not (find-package "NAV2D_NAVIGATOR"))
    (make-package "NAV2D_NAVIGATOR"))
  (shadow 'LocalizeResult (find-package "NAV2D_NAVIGATOR")))
(unless (find-package "NAV2D_NAVIGATOR::LOCALIZERESULT")
  (make-package "NAV2D_NAVIGATOR::LOCALIZERESULT"))

(in-package "ROS")
;;//! \htmlinclude LocalizeResult.msg.html


(defclass nav2d_navigator::LocalizeResult
  :super ros::object
  :slots ())

(defmethod nav2d_navigator::LocalizeResult
  (:init
   (&key
    )
   (send-super :init)
   self)
  (:serialization-length
   ()
   (+
    0
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;;
   self)
  )

(setf (get nav2d_navigator::LocalizeResult :md5sum-) "d41d8cd98f00b204e9800998ecf8427e")
(setf (get nav2d_navigator::LocalizeResult :datatype-) "nav2d_navigator/LocalizeResult")
(setf (get nav2d_navigator::LocalizeResult :definition-)
      "# ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======

")



(provide :nav2d_navigator/LocalizeResult "d41d8cd98f00b204e9800998ecf8427e")

