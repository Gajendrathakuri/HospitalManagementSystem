using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Cryptography.Pkcs;

namespace HIMS.Models.Pharmacy
{
    public class Medicines
    {
        public Guid Id { get; set; }
        public string BrandName { get; set; }
        public string GenericName { get; set; }
        public string CompanyName { get; set; }

        [Column(TypeName ="decimal(18,2)")]
        public decimal Price { get; set; }
        public int Stock { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal UnitPrice { get; set; }
        public DateTime ManufactureDate { get; set; }
        public DateTime ExpiryDate { get; set; }

    }
}
