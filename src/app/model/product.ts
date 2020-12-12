/**
 * Created by andrew.yang on 7/27/2017.
 */
export class Product {
    title?: string;
    brand?: string;
    price?: number;
    description?: string;
    image?: string
}

export interface IProduct {
    ProductItemID: number;
    ProductID?: number;
    ProductName?: string;
    CategoryID?: number;
    CategoryName?: string;
    DeveloperID?: number;
    UnitTypeID?: number;
    UnitTypeName?: string;
    UnitTypeShortName?: string;
    Tax?: number;
    Price?: number;
    Description?: string;
    Quantity?: number;
    ProductItemCode?: string;
    PurchasePrice?: number;
    IsBypassPrinting?: boolean;
    StockID?: number;
    IsDirty?: boolean;
    Stock?: number;
    MinStock?: number;
    MaxStock?: number;
    ProductItemTypeID?: number;
    InwardOrOutwardTypeID?: number;
    Rate: number;
    UnitConvertRuleID?: number;
    UnitConvertRule?: string;
    ListOfIngradient?: string[];
    StockKeepingUnitID?: number;
    PrinterSettingsID?: number;
    InwardOrOutwardType?: string;

    ListOfRules?: string[];
    Tags?: string[];
    CategoryProductItemTags?: string[];
    AssignedTags?: string[];
    AssignedPrinters?: string[];
    DepartmentID?: number;
    DepartmentName?: string;
    Discount?: number;
    GetCount?: number;
    BuyCount?: number;
    TaxSlabID?: number;
    
    CategoryTypeID?: number;
    CategoryTypeName?: string;
    ProductItemNameCode?: string;
    HappyHourStartTime?: Date;
    HappyHourStartTimeTimeStr?: string;
    HappyHourEndTime?: Date;
    HappyHourEndTimeTimeStr?: string;
    IsActive?: boolean;
    DepartmentBelongsToID?: number;
    DepartmentBelongsToName?: string;
    DepartmentBelongsTo?: string;
    QRCode?: string;
    GatNumber?: number;
    IsCustomPrice?: number;
    Incentive?: number;
    StockDetails?: string;
    StockList?: string[];
    ProductItemNameDisplay?: string;
    Rank?: number;
    PreviewImage?: string;
    RenderFullNameLink?: string;
    SequenceNumber?: number;
    ImageUrl?: string;
    ImageID?: number;
    ItemImage?: string;
    ProjectID?: number;
    PropertyID?: number;
    CustomerID?: number;
    LanguageID?: number;
    CreatedDate?: Date;
    ModifiedDate?: Date;
    AddedBy?: number;
    ModifiedBy?: number;
    DeletedOn?: Date;
    Operation?: string;
}