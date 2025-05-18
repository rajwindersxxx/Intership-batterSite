import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
  homePrice: number;
  zipCode: number;
  downPayment: number;
  interestRate: number;
  loanYears: number;
  taxes: number;
  insurance: number;
  hoaFees: number;
  utilities: number;
  monthlyPayment: number;
  princeInterest: number;
  loanAmount: number;
}

const initialState: InitialState = {
  homePrice: 300000,
  monthlyPayment: 2780.96,
  loanAmount: 240000,
  zipCode: 302002,
  downPayment: 60000,
  interestRate: 6.5,
  loanYears: 30,
  taxes: 900,
  insurance: 132,
  hoaFees: 132,
  utilities: 100,
  princeInterest: 1516.96,
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    updateFields: (
      state,
      action: PayloadAction<{
        field: keyof InitialState;
        value: string | number;
      }>
    ) => {
      const { field, value } = action.payload;
      state[field] = value as number;

      // Calculate Loan Amount
      state.loanAmount = state.homePrice - state.downPayment;

      // Monthly Interest Rate (convert % to decimal)
      const monthlyInterestRate = state.interestRate / 100 / 12;
      const totalPayments = state.loanYears * 12;

      // Calculate Principal & Interest
      if (monthlyInterestRate === 0) {
        // Edge case: 0% interest
        state.princeInterest = state.loanAmount / totalPayments;
      } else {
        const x = Math.pow(1 + monthlyInterestRate, totalPayments);
        state.princeInterest =
          state.loanAmount * ((monthlyInterestRate * x) / (x - 1));
      }

      // Round to 2 decimals (optional: for internal state or display)
      state.princeInterest = parseFloat(state.princeInterest.toFixed(2));

      // Calculate Total Monthly Payment
      const { princeInterest, insurance, hoaFees, utilities, taxes } = state;

      state.monthlyPayment = parseFloat(
        (princeInterest + insurance + hoaFees + utilities + taxes).toFixed(2)
      );
    },
  },
});
export const { updateFields } = calculatorSlice.actions;

export default calculatorSlice.reducer;
