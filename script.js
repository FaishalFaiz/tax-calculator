/**
 * Interest Rate Calculator Core Logic
 * Prevents TypeErrors by wrapping execution listeners safely inside DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', () => {
    const computeBtn = document.getElementById('compute-btn');
    const resultBox = document.getElementById('result-box');
    const interestOutput = document.getElementById('interest-output');
    const totalOutput = document.getElementById('total-output');

    // Safe click interaction handler
    computeBtn.addEventListener('click', () => {
        // Explicit conversion from raw values to semantic number types
        const principal = parseFloat(document.getElementById('principal').value);
        const rate = parseFloat(document.getElementById('rate').value);
        const years = parseFloat(document.getElementById('years').value);

        // Validation payload checking to eliminate edge execution glitches
        if (isNaN(principal) || isNaN(rate) || isNaN(years) || principal <= 0 || rate <= 0 || years <= 0) {
            alert("Please input positive, valid numbers across all calculation fields.");
            return;
        }

        // Execute core interest formulation: I = (P * R * T) / 100[cite: 3]
        const simpleInterest = (principal * rate * years) / 100;
        const totalAmount = principal + simpleInterest;

        // Render dynamic text values seamlessly to the layout interface
        interestOutput.textContent = `Earned Interest Amount: $${simpleInterest.toFixed(2)}`;
        totalOutput.textContent = `Total Balance Accumulation: $${totalAmount.toFixed(2)}`;

        // Unveil result UI wrapper container
        resultBox.classList.remove('d-none');
    });
});

// Explicit export block configuration to support Jasmine unit verification suites down the line[cite: 3]
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateInterest: (p, r, t) => (parseFloat(p) * parseFloat(r) * parseFloat(t)) / 100 };
}