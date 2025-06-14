export const checkCheckoutDate = () => {
    const guestData = localStorage.getItem('guestData');
    
    if (!guestData) return false;

    const { checkoutDate } = JSON.parse(guestData);
    const today = new Date();
    const checkout = new Date(checkoutDate);

    // Reset time part for accurate date comparison
    today.setHours(0, 0, 0, 0);
    checkout.setHours(0, 0, 0, 0);

    return today >= checkout;
};