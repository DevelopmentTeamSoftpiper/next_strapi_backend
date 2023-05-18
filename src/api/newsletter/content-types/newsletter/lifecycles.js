module.exports = {
  async afterCreate(event){
    const {result} = event;
    try{
      await strapi.plugins['email'].services.email.send({
        to: result.email,
        from: 'alarafatsiddique@softpiper.com',
        subject: "Subscription Added",
        text: `You have subscribed successfully`
      })
    }catch(error){
      console.log(error);
    }
  }
}
