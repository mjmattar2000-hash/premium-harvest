/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: companyactivities
 * Interface for CompanyActivities
 */
export interface CompanyActivities {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  activityTitle?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  activityImage?: string;
  /** @wixFieldType date */
  activityDate?: Date | string;
  /** @wixFieldType text */
  activityType?: string;
}


/**
 * Collection ID: wholesaleproducts
 * Interface for WholesaleProducts
 */
export interface WholesaleProducts {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  productName?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  productImage?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType text */
  bulkPackagingInfo?: string;
  /** @wixFieldType text */
  sku?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  productImage1?: string;
}
