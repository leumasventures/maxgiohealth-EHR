import { Invoice } from "@/types/billing";
import Badge from "@/components/ui/Badge";

interface Props {
  invoice: Invoice;
}

export default function InvoiceCard({
  invoice,
}: Props) {
  const variant =
    invoice.status === "PAID"
      ? "success"
      : invoice.status === "OVERDUE"
      ? "danger"
      : "warning";

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">
            {invoice.invoiceNumber}
          </h3>

          <p className="text-sm text-gray-500">
            {invoice.issueDate}
          </p>
        </div>

        <Badge variant={variant}>
          {invoice.status}
        </Badge>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-4">
        <div>
          <p className="text-xs text-gray-500">
            Total
          </p>

          <p className="font-semibold">
            ₦{invoice.total.toLocaleString()}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500">
            Paid
          </p>

          <p className="font-semibold">
            ₦{invoice.amountPaid.toLocaleString()}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500">
            Balance
          </p>

          <p className="font-semibold text-red-600">
            ₦{invoice.balance.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}