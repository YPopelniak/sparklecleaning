const baseUrl = 'https://api.telegram.org/bot6438659610:AAF2LR9AdLQfiLhXJOeCm2maIJuLQ7PdSCU/'
export  const sendMessage =  async (message: string): Promise<void> => {
    const url = `${baseUrl}sendMessage?chat_id=-1002093326932&text=${message}`
  //  const url = `${baseUrl}sendMessage?chat_id=550277991&text=${message}`
    await  fetch(url);
};
