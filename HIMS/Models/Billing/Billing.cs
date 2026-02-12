using HIMS.Models.PatientModels;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HIMS.Models.Billing
{
    public class Billing
    {
        public Guid Id { get; set; }
        public Guid PatientId { get; set; }

        [ForeignKey("PatientId")]
        public PatientModels.Patient? Patient { get; set; }
        
        public double TotalAmount { get; set; }
        public double Discount { get; set; }
        public double FinalAmount { get; set; }
        public BillingStatusEnums BillingStatus { get; set; }
        public PaymentTypes PaymentTypes { get; set; }

    }
}
