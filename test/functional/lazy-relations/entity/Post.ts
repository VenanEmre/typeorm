import {Table} from "../../../../src/decorator/tables/Table";
import {PrimaryColumn} from "../../../../src/decorator/columns/PrimaryColumn";
import {Column} from "../../../../src/decorator/columns/Column";
import {Category} from "./Category";
import {ManyToMany} from "../../../../src/decorator/relations/ManyToMany";
import {JoinTable} from "../../../../src/decorator/relations/JoinTable";

@Table()
export class Post {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @ManyToMany(type => Category)
    @JoinTable()
    categories: Promise<Category[]>;

    @ManyToMany(type => Category, category => category.twoSidePosts)
    @JoinTable()
    twoSideCategories: Promise<Category[]>;

    @Column()
    viewCount: number = 0;

}