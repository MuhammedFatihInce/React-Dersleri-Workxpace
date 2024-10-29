import * as Yup from 'yup';

export const registerFormSchemas = Yup.object().shape({
    email: Yup.string().email("Geçerli email adresi giriniz").required("Email adresi zorunlu"),
    age: Yup.number().positive("Pozitif bir değer giriniz").integer("Tam sayı giriniz").required("Yaş alanı zorunlu"),
    password: Yup.string().required("Şifre alanı zorunlu"),
    confirmPassword: Yup.string().required("Şifre tekrarı zorunlu")
        .oneOf([Yup.ref('password', Yup.password)] , 'Şifreler eşleşmiyor.'),
    term: Yup.boolean().required("Lütfen kutucuğu onaylayınız")
})