// Auto-generated. Do not edit!

// (in-package exp_assignment3.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class PlanningFeedback {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.stat = null;
      this.position = null;
    }
    else {
      if (initObj.hasOwnProperty('stat')) {
        this.stat = initObj.stat
      }
      else {
        this.stat = '';
      }
      if (initObj.hasOwnProperty('position')) {
        this.position = initObj.position
      }
      else {
        this.position = new geometry_msgs.msg.Pose();
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type PlanningFeedback
    // Serialize message field [stat]
    bufferOffset = _serializer.string(obj.stat, buffer, bufferOffset);
    // Serialize message field [position]
    bufferOffset = geometry_msgs.msg.Pose.serialize(obj.position, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type PlanningFeedback
    let len;
    let data = new PlanningFeedback(null);
    // Deserialize message field [stat]
    data.stat = _deserializer.string(buffer, bufferOffset);
    // Deserialize message field [position]
    data.position = geometry_msgs.msg.Pose.deserialize(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += object.stat.length;
    return length + 60;
  }

  static datatype() {
    // Returns string type for a message object
    return 'exp_assignment3/PlanningFeedback';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '436d418e7944afa3067a7cb1612a2ab0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    string stat
    geometry_msgs/Pose position
    
    
    ================================================================================
    MSG: geometry_msgs/Pose
    # A representation of pose in free space, composed of position and orientation. 
    Point position
    Quaternion orientation
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new PlanningFeedback(null);
    if (msg.stat !== undefined) {
      resolved.stat = msg.stat;
    }
    else {
      resolved.stat = ''
    }

    if (msg.position !== undefined) {
      resolved.position = geometry_msgs.msg.Pose.Resolve(msg.position)
    }
    else {
      resolved.position = new geometry_msgs.msg.Pose()
    }

    return resolved;
    }
};

module.exports = PlanningFeedback;
