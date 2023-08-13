const Validation=(values)=>
{
    let errors={};

    if(values.name==="")
    {
      errors.name="Kullanıcı ismi ve soyismi boş geçilemez."
    }
    
    else if(values.email==="")
    {
      errors.email="Kullanıcı email boş geçilemez."
    }
    else if(values.password==="")
    {
    errors.password="Şifre boş geçilemez."
    }
    else if(values.confirmPassword==="")
    {
    errors.confirmPassword="Şifrenizi tekrar giriniz."
    }
    else if(values.password!==values.confirmPassword)
    {
    errors.password="Şifreleriniz eşleşmedi."
    }
    return errors;
}
export default Validation;