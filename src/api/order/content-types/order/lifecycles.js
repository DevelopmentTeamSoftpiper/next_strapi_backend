module.exports = {
  async afterCreate(event){
    const {result} = event;
    try{
      await strapi.plugins['email'].services.email.send({
        to: result.email,
        from: 'alarafatsiddique@softpiper.com',
        subject: "Your Safefood order has been received!",
        text: `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Order Confirmation</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 20px;
                    background-color: #f5f5f5;
                }

                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    padding: 30px;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }

                h1 {
                    text-align: center;
                }

                p {
                    margin-bottom: 20px;
                }

                .cta-button {
                    display: block;
                    text-align: center;
                    background-color: #4CAF50;
                    color: #ffffff;
                    text-decoration: none;
                    padding: 10px 20px;
                    border-radius: 3px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Order Confirmation</h1>
                <p>Dear ${result.name},</p>
                <p>Thank you for your order! We're pleased to inform you that your order has been successfully placed and is being processed.</p>
                <p>Order details:</p>
                <ul>
                    <li><strong>Order ID:</strong> ${result.id}</li>
                    <li><strong>Order Date:</strong> ${result.updatedAt}</li>
                    <li><strong>Shipping Address:</strong> ${result.address},${result.city},${result.post_code},${result.country} </li>

                    <li><strong>Total Amount:</strong> BDT ${result.total}</li>
                </ul>
                <p>You will receive a confirmation email with the tracking details once your order has been shipped. If you have any questions or need further assistance, please feel free to contact our customer support team.</p>
                <p>Thank you again for choosing our store. We appreciate your business!</p>
                <a class="cta-button" href="http://localhost:3000/account/orders">Track Order</a>
            </div>
        </body>
        </html>

        `
      })
    }catch(error){
      console.log(error);
    }
  }
}
