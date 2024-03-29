import { IsString, Length, MinLength } from 'class-validator'
import { ErrorCode } from '@/constants/error'
import { UserConstants } from '@/constants/constants'

export enum LoginVerifyType {
  phone = 'phone',
  email = 'username',
}

export class LoginDto {
  @MinLength(1, {
    message: '手机号码/邮箱地址或密码不正确',
  })
  @IsString()
  readonly username: string

  @Length(UserConstants.PASSWORD_MIN_LENGTH, UserConstants.PASSWORD_MAX_LENGTH, {
    message: ErrorCode.InvalidPassword.MESSAGE,
    context: {
      code: ErrorCode.InvalidPassword.CODE,
    },
  })
  @IsString({
    message: ErrorCode.InvalidPassword.MESSAGE,
    context: {
      code: ErrorCode.InvalidPassword.CODE,
    },
  })
  readonly password: string

  // @IsEnum(LoginVerifyType, {
  //   message: '无效的登录方式',
  // })
  // readonly verifyType: string;

  // @MinLength(1, {
  //   message: 'geetest_challenge不能为空',
  // })
  // @IsString()
  // readonly geetest_challenge: string;

  // @MinLength(1, {
  //   message: 'geetest_validate不能为空',
  // })
  // @IsString()
  // readonly geetest_validate: string;

  // @MinLength(1, {
  //   message: 'geetest_seccode不能为空',
  // })
  // @IsString()
  // readonly geetest_seccode: string;
}
