
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      accomplishments: {
        Row: {
          category: string | null
          created_at: string
          criteria: Json | null
          description: string | null
          id: number
          image_url: string | null
          is_active: boolean | null
          level: string | null
          name: string | null
          points: number | null
          type: string | null
          updated_at: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          criteria?: Json | null
          description?: string | null
          id?: number
          image_url?: string | null
          is_active?: boolean | null
          level?: string | null
          name?: string | null
          points?: number | null
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string
          criteria?: Json | null
          description?: string | null
          id?: number
          image_url?: string | null
          is_active?: boolean | null
          level?: string | null
          name?: string | null
          points?: number | null
          type?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      actions: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          id: number
          name: string | null
          points: Json | null
          updated_at: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: number
          name?: string | null
          points?: Json | null
          updated_at?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: number
          name?: string | null
          points?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      challenges: {
        Row: {
          archived: boolean | null
          badges: Json | null
          content_meta_id: string | null
          cover_image: Json | null
          created_at: string | null
          description: string | null
          difficulty: string | null
          id: string
          is_open: boolean | null
          language: string
          program_id: string | null
          pub_date: string
          sequence: number | null
          subtitle: string | null
          title: string
          updated_at: string | null
          updated_date: string | null
          version: number | null
        }
        Insert: {
          archived?: boolean | null
          badges?: Json | null
          content_meta_id?: string | null
          cover_image?: Json | null
          created_at?: string | null
          description?: string | null
          difficulty?: string | null
          id?: string
          is_open?: boolean | null
          language?: string
          program_id?: string | null
          pub_date: string
          sequence?: number | null
          subtitle?: string | null
          title: string
          updated_at?: string | null
          updated_date?: string | null
          version?: number | null
        }
        Update: {
          archived?: boolean | null
          badges?: Json | null
          content_meta_id?: string | null
          cover_image?: Json | null
          created_at?: string | null
          description?: string | null
          difficulty?: string | null
          id?: string
          is_open?: boolean | null
          language?: string
          program_id?: string | null
          pub_date?: string
          sequence?: number | null
          subtitle?: string | null
          title?: string
          updated_at?: string | null
          updated_date?: string | null
          version?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "challenges_content_meta_id_fkey"
            columns: ["content_meta_id"]
            isOneToOne: false
            referencedRelation: "content_meta"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "challenges_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
        ]
      }
      content_feedback: {
        Row: {
          created_at: string
          created_by: string
          id: number
          rating: number | null
          text: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: number
          rating?: number | null
          text?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: number
          rating?: number | null
          text?: string | null
        }
        Relationships: []
      }
      content_meta: {
        Row: {
          accomplishment_id: number | null
          content: string | null
          content_type: string
          created_at: string
          description: string | null
          difficulty: string | null
          has_form: boolean | null
          id: string
          milestone_id: string | null
          program_id: string | null
          related_content: Json | null
          sequence: number | null
          slug: string | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          accomplishment_id?: number | null
          content?: string | null
          content_type: string
          created_at?: string
          description?: string | null
          difficulty?: string | null
          has_form?: boolean | null
          id?: string
          milestone_id?: string | null
          program_id?: string | null
          related_content?: Json | null
          sequence?: number | null
          slug?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          accomplishment_id?: number | null
          content?: string | null
          content_type?: string
          created_at?: string
          description?: string | null
          difficulty?: string | null
          has_form?: boolean | null
          id?: string
          milestone_id?: string | null
          program_id?: string | null
          related_content?: Json | null
          sequence?: number | null
          slug?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "content_meta_accomplishment_id_fkey"
            columns: ["accomplishment_id"]
            isOneToOne: false
            referencedRelation: "accomplishments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "content_meta_milestone_id_fkey"
            columns: ["milestone_id"]
            isOneToOne: false
            referencedRelation: "content_meta"
            referencedColumns: ["id"]
          },
        ]
      }
      discounts: {
        Row: {
          code: string
          created_at: string
          currency: string | null
          entity_id: string
          entity_name: string | null
          entity_type: string
          id: number
          updated_at: string | null
          valid_from: string | null
          valid_until: string | null
          value: number
          value_type: string
        }
        Insert: {
          code: string
          created_at?: string
          currency?: string | null
          entity_id: string
          entity_name?: string | null
          entity_type: string
          id?: number
          updated_at?: string | null
          valid_from?: string | null
          valid_until?: string | null
          value: number
          value_type: string
        }
        Update: {
          code?: string
          created_at?: string
          currency?: string | null
          entity_id?: string
          entity_name?: string | null
          entity_type?: string
          id?: number
          updated_at?: string | null
          valid_from?: string | null
          valid_until?: string | null
          value?: number
          value_type?: string
        }
        Relationships: []
      }
      event_participants: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string | null
          email: string | null
          event_id: string
          id: string
          is_featured: boolean | null
          name: string
          organization: string | null
          organization_role: string | null
          participant_type: string
          session_description: string | null
          session_title: string | null
          user_id: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          email?: string | null
          event_id: string
          id?: string
          is_featured?: boolean | null
          name: string
          organization?: string | null
          organization_role?: string | null
          participant_type: string
          session_description?: string | null
          session_title?: string | null
          user_id?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          email?: string | null
          event_id?: string
          id?: string
          is_featured?: boolean | null
          name?: string
          organization?: string | null
          organization_role?: string | null
          participant_type?: string
          session_description?: string | null
          session_title?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_participants_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      event_registrations: {
        Row: {
          attendance_status: string | null
          created_at: string | null
          event_id: string
          id: string
          payment_amount: number | null
          payment_date: string | null
          payment_status: string | null
          registration_date: string | null
          user_id: string
        }
        Insert: {
          attendance_status?: string | null
          created_at?: string | null
          event_id: string
          id?: string
          payment_amount?: number | null
          payment_date?: string | null
          payment_status?: string | null
          registration_date?: string | null
          user_id: string
        }
        Update: {
          attendance_status?: string | null
          created_at?: string | null
          event_id?: string
          id?: string
          payment_amount?: number | null
          payment_date?: string | null
          payment_status?: string | null
          registration_date?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_registrations_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          capacity: number | null
          created_at: string | null
          created_by: string
          currency: string | null
          description: string | null
          end_time: string
          event_format: string
          event_type: string
          featured_image_url: string | null
          id: string
          is_member_only: boolean
          is_paid: boolean
          location: Json | null
          online_link: string | null
          price: number | null
          start_time: string
          title: string
          updated_at: string | null
        }
        Insert: {
          capacity?: number | null
          created_at?: string | null
          created_by: string
          currency?: string | null
          description?: string | null
          end_time: string
          event_format: string
          event_type: string
          featured_image_url?: string | null
          id?: string
          is_member_only?: boolean
          is_paid?: boolean
          location?: Json | null
          online_link?: string | null
          price?: number | null
          start_time: string
          title: string
          updated_at?: string | null
        }
        Update: {
          capacity?: number | null
          created_at?: string | null
          created_by?: string
          currency?: string | null
          description?: string | null
          end_time?: string
          event_format?: string
          event_type?: string
          featured_image_url?: string | null
          id?: string
          is_member_only?: boolean
          is_paid?: boolean
          location?: Json | null
          online_link?: string | null
          price?: number | null
          start_time?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      leads: {
        Row: {
          city: string | null
          communications: Json | null
          country: string | null
          created_at: string
          email: string | null
          first_name: string | null
          gender: string | null
          id: number
          last_name: string | null
          notes: string | null
          opt_newsletter: boolean | null
          opt_updates: boolean | null
          other_details: Json | null
          phone: string | null
          program_id: string | null
          segment: string | null
          source: string | null
          source_details: Json | null
          status: string | null
        }
        Insert: {
          city?: string | null
          communications?: Json | null
          country?: string | null
          created_at?: string
          email?: string | null
          first_name?: string | null
          gender?: string | null
          id?: number
          last_name?: string | null
          notes?: string | null
          opt_newsletter?: boolean | null
          opt_updates?: boolean | null
          other_details?: Json | null
          phone?: string | null
          program_id?: string | null
          segment?: string | null
          source?: string | null
          source_details?: Json | null
          status?: string | null
        }
        Update: {
          city?: string | null
          communications?: Json | null
          country?: string | null
          created_at?: string
          email?: string | null
          first_name?: string | null
          gender?: string | null
          id?: number
          last_name?: string | null
          notes?: string | null
          opt_newsletter?: boolean | null
          opt_updates?: boolean | null
          other_details?: Json | null
          phone?: string | null
          program_id?: string | null
          segment?: string | null
          source?: string | null
          source_details?: Json | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "leads_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
        ]
      }
      newsletter_subscriptions: {
        Row: {
          created_at: string
          email: string | null
          id: number
          status: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: number
          status?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: number
          status?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      offerings: {
        Row: {
          base_price_amount: number | null
          created_at: string
          currency: string | null
          description: string | null
          duration_months: number | null
          entity_type: string | null
          id: number
          is_active: boolean | null
          name: string
          related_entity_id: string | null
          updated_at: string | null
        }
        Insert: {
          base_price_amount?: number | null
          created_at?: string
          currency?: string | null
          description?: string | null
          duration_months?: number | null
          entity_type?: string | null
          id?: number
          is_active?: boolean | null
          name: string
          related_entity_id?: string | null
          updated_at?: string | null
        }
        Update: {
          base_price_amount?: number | null
          created_at?: string
          currency?: string | null
          description?: string | null
          duration_months?: number | null
          entity_type?: string | null
          id?: number
          is_active?: boolean | null
          name?: string
          related_entity_id?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      program_enrollments: {
        Row: {
          enrolled_at: string
          id: number
          payment_id: string | null
          program_id: string | null
          program_name: string | null
          user_id: string | null
        }
        Insert: {
          enrolled_at?: string
          id?: number
          payment_id?: string | null
          program_id?: string | null
          program_name?: string | null
          user_id?: string | null
        }
        Update: {
          enrolled_at?: string
          id?: number
          payment_id?: string | null
          program_id?: string | null
          program_name?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "program_enrollments_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
        ]
      }
      programs: {
        Row: {
          created_at: string
          description: string | null
          id: string
          mode: string | null
          name: string
          price: Json | null
          type: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          mode?: string | null
          name: string
          price?: Json | null
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          mode?: string | null
          name?: string
          price?: Json | null
          type?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      resource_meta: {
        Row: {
          categories: string[] | null
          created_at: string
          created_by: string | null
          description: string | null
          id: number
          slug: string | null
          status: string | null
          tags: string[] | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          categories?: string[] | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: number
          slug?: string | null
          status?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          categories?: string[] | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: number
          slug?: string | null
          status?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      resources_comments: {
        Row: {
          created_at: string
          created_by: string
          id: number
          resources_meta_id: number
          status: string | null
          text: string | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          created_by: string
          id?: number
          resources_meta_id: number
          status?: string | null
          text?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: number
          resources_meta_id?: number
          status?: string | null
          text?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "resources_comments_resources_meta_id_fkey"
            columns: ["resources_meta_id"]
            isOneToOne: false
            referencedRelation: "resource_meta"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          created_at: string
          description: string | null
          id: number
          name: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          name?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          created_at: string
          end_date: string | null
          id: number
          offering_id: number | null
          payment_id: string | null
          start_date: string | null
          status: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          end_date?: string | null
          id?: number
          offering_id?: number | null
          payment_id?: string | null
          start_date?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Update: {
          created_at?: string
          end_date?: string | null
          id?: number
          offering_id?: number | null
          payment_id?: string | null
          start_date?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      transactions: {
        Row: {
          base_amount: number
          created_at: string
          currency: string | null
          discount_amount: number | null
          discount_id: number | null
          id: number
          offering_id: number | null
          offering_name: string | null
          offering_type: string | null
          payment_method: string | null
          payment_provider: string | null
          provider_data: Json | null
          provider_transaction_id: string | null
          status: string | null
          tax_amount: number | null
          total_amount_paid: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          base_amount: number
          created_at?: string
          currency?: string | null
          discount_amount?: number | null
          discount_id?: number | null
          id?: number
          offering_id?: number | null
          offering_name?: string | null
          offering_type?: string | null
          payment_method?: string | null
          payment_provider?: string | null
          provider_data?: Json | null
          provider_transaction_id?: string | null
          status?: string | null
          tax_amount?: number | null
          total_amount_paid?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          base_amount?: number
          created_at?: string
          currency?: string | null
          discount_amount?: number | null
          discount_id?: number | null
          id?: number
          offering_id?: number | null
          offering_name?: string | null
          offering_type?: string | null
          payment_method?: string | null
          payment_provider?: string | null
          provider_data?: Json | null
          provider_transaction_id?: string | null
          status?: string | null
          tax_amount?: number | null
          total_amount_paid?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "transactions_applied_discount_id_fkey"
            columns: ["discount_id"]
            isOneToOne: false
            referencedRelation: "discounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_offering_id_fkey"
            columns: ["offering_id"]
            isOneToOne: false
            referencedRelation: "offerings"
            referencedColumns: ["id"]
          },
        ]
      }
      user_accomplishments: {
        Row: {
          accomplishment_id: number | null
          context_data: Json | null
          created_at: string
          earned_at: string | null
          id: number
          user_id: string | null
        }
        Insert: {
          accomplishment_id?: number | null
          context_data?: Json | null
          created_at?: string
          earned_at?: string | null
          id?: number
          user_id?: string | null
        }
        Update: {
          accomplishment_id?: number | null
          context_data?: Json | null
          created_at?: string
          earned_at?: string | null
          id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_accomplishments_accomplishment_id_fkey"
            columns: ["accomplishment_id"]
            isOneToOne: false
            referencedRelation: "accomplishments"
            referencedColumns: ["id"]
          },
        ]
      }
      user_bookmarks: {
        Row: {
          content_id: string | null
          content_type: string | null
          created_at: string
          id: number
          reference_path: string | null
          user_id: string | null
        }
        Insert: {
          content_id?: string | null
          content_type?: string | null
          created_at?: string
          id?: number
          reference_path?: string | null
          user_id?: string | null
        }
        Update: {
          content_id?: string | null
          content_type?: string | null
          created_at?: string
          id?: number
          reference_path?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_challenges: {
        Row: {
          challenge_id: string
          completed: boolean | null
          completed_levels: number[] | null
          created_at: string | null
          current_level: number | null
          id: string
          rating: number | null
          shared_at: string | null
          shared_experience: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          challenge_id: string
          completed?: boolean | null
          completed_levels?: number[] | null
          created_at?: string | null
          current_level?: number | null
          id?: string
          rating?: number | null
          shared_at?: string | null
          shared_experience?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          challenge_id?: string
          completed?: boolean | null
          completed_levels?: number[] | null
          created_at?: string | null
          current_level?: number | null
          id?: string
          rating?: number | null
          shared_at?: string | null
          shared_experience?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_challenges_challenge_id_fkey"
            columns: ["challenge_id"]
            isOneToOne: false
            referencedRelation: "challenges"
            referencedColumns: ["id"]
          },
        ]
      }
      user_cheer_squad: {
        Row: {
          created_at: string | null
          email: string
          id: string
          name: string | null
          relationship: string | null
          status: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          name?: string | null
          relationship?: string | null
          status?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          name?: string | null
          relationship?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_cheer_squad_updates: {
        Row: {
          cheer_squad_id: string
          created_at: string | null
          id: string
          status: string | null
          type: string
          update_link: string | null
          update_text: string | null
          user_id: string
        }
        Insert: {
          cheer_squad_id: string
          created_at?: string | null
          id?: string
          status?: string | null
          type: string
          update_link?: string | null
          update_text?: string | null
          user_id: string
        }
        Update: {
          cheer_squad_id?: string
          created_at?: string | null
          id?: string
          status?: string | null
          type?: string
          update_link?: string | null
          update_text?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_cheer_squad_updates_cheer_squad_id_fkey"
            columns: ["cheer_squad_id"]
            isOneToOne: false
            referencedRelation: "user_cheer_squad"
            referencedColumns: ["id"]
          },
        ]
      }
      user_journals: {
        Row: {
          category: string | null
          content: string | null
          created_at: string
          entry_data: Json | null
          id: string
          is_public: boolean | null
          related_entity_id: string | null
          related_entity_slug: string | null
          related_entity_type: string | null
          title: string | null
          type: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          category?: string | null
          content?: string | null
          created_at?: string
          entry_data?: Json | null
          id?: string
          is_public?: boolean | null
          related_entity_id?: string | null
          related_entity_slug?: string | null
          related_entity_type?: string | null
          title?: string | null
          type?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          category?: string | null
          content?: string | null
          created_at?: string
          entry_data?: Json | null
          id?: string
          is_public?: boolean | null
          related_entity_id?: string | null
          related_entity_slug?: string | null
          related_entity_type?: string | null
          title?: string | null
          type?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_notes: {
        Row: {
          content: string | null
          content_meta_id: string | null
          content_meta_type: string | null
          created_at: string
          id: number
          reference_path: string | null
          title: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          content?: string | null
          content_meta_id?: string | null
          content_meta_type?: string | null
          created_at?: string
          id?: number
          reference_path?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Update: {
          content?: string | null
          content_meta_id?: string | null
          content_meta_type?: string | null
          created_at?: string
          id?: number
          reference_path?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notes_content_id_fkey"
            columns: ["content_meta_id"]
            isOneToOne: false
            referencedRelation: "content_meta"
            referencedColumns: ["id"]
          },
        ]
      }
      user_oauth_tokens: {
        Row: {
          access_token: string | null
          created_at: string
          expires_at: string | null
          provider: string
          refresh_token: string | null
          user_id: string
        }
        Insert: {
          access_token?: string | null
          created_at?: string
          expires_at?: string | null
          provider: string
          refresh_token?: string | null
          user_id: string
        }
        Update: {
          access_token?: string | null
          created_at?: string
          expires_at?: string | null
          provider?: string
          refresh_token?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_opportunities: {
        Row: {
          category: string | null
          comments: Json[] | null
          created_at: string
          description: string | null
          goal_alignment_details: string | null
          id: number
          problem_type: string | null
          rank: number | null
          remarks: string | null
          status: string | null
          subcategory: string | null
          target_audience: string[] | null
          title: string | null
          urgency: string | null
          user_id: string | null
          wtp: string | null
        }
        Insert: {
          category?: string | null
          comments?: Json[] | null
          created_at?: string
          description?: string | null
          goal_alignment_details?: string | null
          id?: number
          problem_type?: string | null
          rank?: number | null
          remarks?: string | null
          status?: string | null
          subcategory?: string | null
          target_audience?: string[] | null
          title?: string | null
          urgency?: string | null
          user_id?: string | null
          wtp?: string | null
        }
        Update: {
          category?: string | null
          comments?: Json[] | null
          created_at?: string
          description?: string | null
          goal_alignment_details?: string | null
          id?: number
          problem_type?: string | null
          rank?: number | null
          remarks?: string | null
          status?: string | null
          subcategory?: string | null
          target_audience?: string[] | null
          title?: string | null
          urgency?: string | null
          user_id?: string | null
          wtp?: string | null
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          activations: Json[] | null
          address: Json | null
          age_group: string | null
          bio: string | null
          created_at: string | null
          education: Json | null
          employment: Json | null
          first_name: string | null
          gender: string | null
          interests: Json | null
          last_active_at: string | null
          last_name: string | null
          motivation_deal_breakers: string | null
          motivation_emotions: string[] | null
          motivation_perfect_day: string | null
          motivation_statement: string | null
          motivations: Json | null
          myths: Json | null
          preferences: Json | null
          profile_picture: string | null
          settings: Json | null
          social_links: Json | null
          updated_at: string | null
          user_id: string
          username: string
          website: string | null
        }
        Insert: {
          activations?: Json[] | null
          address?: Json | null
          age_group?: string | null
          bio?: string | null
          created_at?: string | null
          education?: Json | null
          employment?: Json | null
          first_name?: string | null
          gender?: string | null
          interests?: Json | null
          last_active_at?: string | null
          last_name?: string | null
          motivation_deal_breakers?: string | null
          motivation_emotions?: string[] | null
          motivation_perfect_day?: string | null
          motivation_statement?: string | null
          motivations?: Json | null
          myths?: Json | null
          preferences?: Json | null
          profile_picture?: string | null
          settings?: Json | null
          social_links?: Json | null
          updated_at?: string | null
          user_id: string
          username: string
          website?: string | null
        }
        Update: {
          activations?: Json[] | null
          address?: Json | null
          age_group?: string | null
          bio?: string | null
          created_at?: string | null
          education?: Json | null
          employment?: Json | null
          first_name?: string | null
          gender?: string | null
          interests?: Json | null
          last_active_at?: string | null
          last_name?: string | null
          motivation_deal_breakers?: string | null
          motivation_emotions?: string[] | null
          motivation_perfect_day?: string | null
          motivation_statement?: string | null
          motivations?: Json | null
          myths?: Json | null
          preferences?: Json | null
          profile_picture?: string | null
          settings?: Json | null
          social_links?: Json | null
          updated_at?: string | null
          user_id?: string
          username?: string
          website?: string | null
        }
        Relationships: []
      }
      user_progress: {
        Row: {
          completed_at: string | null
          content_meta_id: string | null
          content_slug: string | null
          content_title: string | null
          content_type: string | null
          created_at: string
          feedback_rating: number | null
          feedback_text: string | null
          form_completed: boolean | null
          has_form: boolean | null
          id: number
          status: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          content_meta_id?: string | null
          content_slug?: string | null
          content_title?: string | null
          content_type?: string | null
          created_at?: string
          feedback_rating?: number | null
          feedback_text?: string | null
          form_completed?: boolean | null
          has_form?: boolean | null
          id?: number
          status?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          completed_at?: string | null
          content_meta_id?: string | null
          content_slug?: string | null
          content_title?: string | null
          content_type?: string | null
          created_at?: string
          feedback_rating?: number | null
          feedback_text?: string | null
          form_completed?: boolean | null
          has_form?: boolean | null
          id?: number
          status?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_progress_content_meta_id_fkey"
            columns: ["content_meta_id"]
            isOneToOne: false
            referencedRelation: "content_meta"
            referencedColumns: ["id"]
          },
        ]
      }
      user_question_responses: {
        Row: {
          content: string | null
          created_at: string
          feedback_rating: number | null
          id: number
          question_id: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          feedback_rating?: number | null
          id?: number
          question_id?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          feedback_rating?: number | null
          id?: number
          question_id?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_question_responses_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "user_questions"
            referencedColumns: ["id"]
          },
        ]
      }
      user_questions: {
        Row: {
          content: string | null
          content_meta_id: string | null
          content_meta_type: string | null
          created_at: string
          id: number
          is_public: boolean | null
          reference_path: string | null
          status: string | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          content?: string | null
          content_meta_id?: string | null
          content_meta_type?: string | null
          created_at?: string
          id?: number
          is_public?: boolean | null
          reference_path?: string | null
          status?: string | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string | null
          content_meta_id?: string | null
          content_meta_type?: string | null
          created_at?: string
          id?: number
          is_public?: boolean | null
          reference_path?: string | null
          status?: string | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_questions_content_meta_id_fkey"
            columns: ["content_meta_id"]
            isOneToOne: false
            referencedRelation: "content_meta"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: number
          role_id: number
          role_name: string | null
          updated_at: string | null
          user_id: string | null
          valid_until: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          role_id: number
          role_name?: string | null
          updated_at?: string | null
          user_id?: string | null
          valid_until?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          role_id?: number
          role_name?: string | null
          updated_at?: string | null
          user_id?: string | null
          valid_until?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_roles_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_skills: {
        Row: {
          assessment_market_demand: string | null
          assessment_monetization_ideas: Json[] | null
          assessment_notes: string | null
          assessment_passion_level: number | null
          assessment_required_investment: string | null
          assessment_status: string | null
          assessment_viability: Json[] | null
          category: string
          created_at: string | null
          description: string | null
          experience: string | null
          frequency_of_use: string | null
          id: string
          is_public: boolean | null
          name: string | null
          professional_training: string | null
          proficiency_level: string | null
          project_examples: Json | null
          subcategory: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          assessment_market_demand?: string | null
          assessment_monetization_ideas?: Json[] | null
          assessment_notes?: string | null
          assessment_passion_level?: number | null
          assessment_required_investment?: string | null
          assessment_status?: string | null
          assessment_viability?: Json[] | null
          category: string
          created_at?: string | null
          description?: string | null
          experience?: string | null
          frequency_of_use?: string | null
          id?: string
          is_public?: boolean | null
          name?: string | null
          professional_training?: string | null
          proficiency_level?: string | null
          project_examples?: Json | null
          subcategory: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          assessment_market_demand?: string | null
          assessment_monetization_ideas?: Json[] | null
          assessment_notes?: string | null
          assessment_passion_level?: number | null
          assessment_required_investment?: string | null
          assessment_status?: string | null
          assessment_viability?: Json[] | null
          category?: string
          created_at?: string | null
          description?: string | null
          experience?: string | null
          frequency_of_use?: string | null
          id?: string
          is_public?: boolean | null
          name?: string | null
          professional_training?: string | null
          proficiency_level?: string | null
          project_examples?: Json | null
          subcategory?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_task_list: {
        Row: {
          created_at: string
          end_date: string
          id: string
          list_type: string
          start_date: string
          status: string
          tasks: Json[]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          end_date: string
          id?: string
          list_type: string
          start_date: string
          status?: string
          tasks: Json[]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          end_date?: string
          id?: string
          list_type?: string
          start_date?: string
          status?: string
          tasks?: Json[]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
