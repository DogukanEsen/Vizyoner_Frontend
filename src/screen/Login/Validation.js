const Validation=(values)=>
{
    let errors={};
    if(values.email==="")
    {
      errors.email="Kullanıcı adı boş geçilemez."
    }
    else if(values.password==="")
    {
    errors.password="Şifre boş geçilemez."
    }
    return errors;
}
export default Validation;