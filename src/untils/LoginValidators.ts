import { ref, ComponentInternalInstance, getCurrentInstance } from 'vue';

declare interface loginData {
  email: string;
  password: string;
  checkPass: string;
}

export const signForm = ref<loginData>({
  email: '',
  password: '',
  checkPass: '',
});

// const checkPassword = (value, callback) => {
//   if (value === '') {
//     callback(new Error('Please input the password'));
//   } else {
//     if (globalProperties.loginForm.checkPass !== '') {
//       globalProperties.$refs.loginForm.validateField('checkPass');
//     } else if (globalProperties.checkPass.length < 8) {
//       callback(new Error("password's length must contain more than 8 characters"));
//     }
//     callback();
//   }
// };
const checkConfirmPassword = (value, callback) => {
  const { proxy } = getCurrentInstance() as ComponentInternalInstance;
  if (value === '') {
    callback(new Error('Please input the password again'));
  } else if (value !== (proxy as any).loginFrom.pass) {
    callback(new Error("Two inputs don't match!"));
  } else {
    callback();
  }
};

export const signrules = ref({
  email: [{ type: 'email', message: '请输入合法的邮箱地址', required: true, trigger: 'blur' }],
  password: [
    { required: true, message: 'Password could not bre empty!', trigger: 'blur' },
    { min: 8, max: 20, message: 'Password must contain more than 8 characters' },
  ],
  checkPass: [{ required: true, validator: checkConfirmPassword, trigger: 'blur' }],
});

export const handleLogin = formName => {
  const { proxy } = getCurrentInstance() as ComponentInternalInstance;
  (proxy!.$refs as any)[formName].validate(valid => {
    if (valid) {
      alert('login success!');
    } else {
      console.log('error submit!!');
      return false;
    }
  });
};
