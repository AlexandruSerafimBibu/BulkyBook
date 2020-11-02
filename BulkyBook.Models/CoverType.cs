using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace BulkyBook.Models
{
    public class CoverType
    {
        public int Id { get; set; }
        [Required]
        [Display(Name = "Cover name")]
        public string Name { get; set; }
    }
}
