let code = {
	SUCCESS: 0, // success
	TOKEN_EXPIRED: 1, // token过期
	MISS_PARAMS: 2, // 缺少参数
	TOKEN_INVALID: 3, // token不合法
	UNKNOWN_ERROR: 5, // 未知异常
	EMPTY_USERNAME: 100, // 用户名为空
	EMPTY_MOBILE: 101, // 手机号为空
	EMPTY_VALID: 102, // 验证码为空
	EMPTY_WECHAT_CODE: 120, // wechat code 为空
	MAX_SIZE: 130, // 文件size过大
	MIMETYPE_ERROR: 131, // 文件mimetype不正确
	VALID_NOT_READY: 199, // 验证码还没有准备好 60秒间隔
	VALID_ERROR: 200, // 验证码错误
	MOBILE_ERROR: 201, // 手机格式错误

	WECHAT_ERROR: 1000, // 微信api错误
	EMPTY_TYPE: 1001, //类型错误

	//邀请注册错误码
	INVITE_CODE_ERROR: 1002, //邀请码错误 为空
	INVITE_USER_CODE_ERROR: 1003, // 邀请人id和自己的相同
	INVITE_USER_AUTH_ERROR: 1004, //已经下载app 已经绑定微信的用户 邀请人不享受积分
	OBJECT_ID_ERROR: 1005, //object id 格式错误
	INVITE_ERROR: 1006, //邀请人为空
	INVITE_HAS_CODE_ERROR: 1007, //已经被邀请过的用户
	MY_ROBOT_IS_EXITS: 1010 //添加/领养的机器人已经存在
};

let errorStatus = function(errCode, message) {
	let err = new Error(message);
	err.code = errCode;
	err.status = 200;
	return err;
};
export default code;
export { errorStatus };
