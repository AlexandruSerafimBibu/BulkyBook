﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace BulkyBook.Models
{
    public class ApplicationUser: IdentityUser
    {
        [Required]
        public string Name { get; set; }
        public string StreetAdress { get; set; }
        public string City { get; set; }
        public string PostalCode { get; set; }

        [NotMapped]
        public string Role { get; set; }

        public Company Company { get; set; }

        public int CompanyId { get; set; }
    }
}
