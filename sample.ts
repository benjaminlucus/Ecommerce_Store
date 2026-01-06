import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
    slug: 'categories',
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            index: true,
            unique: true
        },
        {
            name: 'color',
            type: 'text',
        },
        {
            name: 'parent',
            type: 'relationship',
            relationTo: "categories",
            hasMany: false
        },
        {
            name: 'subcategories',
            type: 'join',
            collection: "categories",
            on: "parents",
            hasMany: true
        },
        {
            type: 'row',
            fields: [
                {
                    type: 'collapsible',
                    label: 'Category Details',
                    fields: [
                        {
                            name: 'email',
                            type: 'email',
                            unique: true,
                            admin: {
                                placeholder: 'Enter you email address',
                                width: '40%'
                            }
                        },
                    ],
                },

            ]
        },

        {
            name: 'author',
            type: 'relationship',
            relationTo: 'users',
            hasMany: true,

            admin: {
                isSortable: false,
                allowCreate: false,
                allowEdit: false,
                placeholder: 'Select an Author',
            }
        },

        {
            name: 'check',
            type: 'checkbox',
            defaultValue: true,
            admin: {
                description: 'Check this Author',
            }
        },
        {
            type: 'upload',
            name: 'divider',
            relationTo: 'media',
            admin: {
                description: 'Upload a divider image',
            }
        },
        {
            type: 'tabs',
            tabs: [
                {
                    label: "Permissions",
                    name: "permissions",
                    fields: [
                        {
                            name: 'select options',
                            type: 'select',
                            options: [
                                { label: 'Option 1', value: '123' },
                                { label: 'Option 2', value: '456' },
                                { label: 'Option 3', value: '678' },
                            ],
                            hasMany: true,
                            admin: {
                                placeholder: 'Select your options',
                                isClearable: false,
                                isSortable: false,
                            }
                        },
                        {
                            name: 'date',
                            type: 'date',
                            admin: {
                                placeholder: 'Enter your Date',
                                date: {
                                    pickerAppearance: 'dayAndTime',
                                    timeIntervals: 31
                                }
                            }
                        },
                    ]
                },
                {
                    label: "Blog Content",
                    name: "test",
                    fields: [
                        {
                            name: 'email',
                            type: 'email',
                            unique: true,
                            admin: {
                                placeholder: 'Enter you email address'
                            }
                        },
                        {
                            name: 'number',
                            type: 'number',
                            admin: {
                                placeholder: 'Enter your phone number',
                                step: 10
                            }
                        },
                    ]
                }
            ]
        }
    ],


}
