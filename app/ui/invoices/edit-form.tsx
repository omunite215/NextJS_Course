"use client"
import { updateInvoice } from "@/app/lib/actions";
import { CustomerField, InvoiceForm } from "@/app/lib/definitions";
import { useFormState } from "react-dom";

export default function EditInvoiceForm({
  invoice,
  customers,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {
  const initialState = { message: null, errors: {} };
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
  const [state, dispatch] = useFormState(updateInvoiceWithId, initialState);
 
  return <form action={dispatch}></form>;
}